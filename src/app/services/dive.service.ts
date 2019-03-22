import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Dive } from '../models/dive'
import { Observable, combineLatest } from 'rxjs';
import { map, mergeMap, first } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import { DiveSiteService } from './dive-site.service';
import { BuddyService } from './buddy.service';

@Injectable({
  providedIn: 'root'
})
export class DiveService {

  private divesCollection: AngularFirestoreCollection<Dive>
  dives: Observable<Dive[]>
  diveSitesFrequentation: Observable<Object[]>
  private colDive: string = '/dives'

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private diveSiteService: DiveSiteService,
    private buddyService: BuddyService
  ) {
    this.angularFireAuth.user.subscribe(user => {
      this.dives = this.getDives(user.uid)
      this.diveSitesFrequentation = this.getDiveSitesFrequentation(user.uid)
    })
  }

  getDives(userId: string) {
    return this.angularFireStore
      .collection<Dive>(this.colDive, sort => sort.where('diver', '==', userId).orderBy('number'))
      .snapshotChanges()
      .pipe(map(dives => dives.map(dive => {
        let newDive = this.documentToDomainObject(dive)
        return {
          ...newDive,
          fullDiveSite: this.diveSiteService.getDiveSite(newDive.dive_site),
          fullBuddies: newDive.buddies.map(buddyId => { return this.buddyService.getBuddy(buddyId) })
        }
      })))
  }

  private documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }

  create(dive: Dive) {
    this.angularFireAuth.user.subscribe(user => {
      this.getDives(user.uid).pipe(first()).subscribe(dives => {
        dive.number = dives.length + 1
        dive.diver = user.uid
        this.angularFireStore
          .doc<Dive>(`${this.colDive}/${this.angularFireStore.createId()}`).set(dive)
      })
    })
  }

  delete(dive: Dive) {
    return this.angularFireStore.doc<Dive>(`${this.colDive}/${dive.id}`).delete()
  }

  private getDiveSitesFromDives(userId: string) {
    return this.getDives(userId)
      .pipe(mergeMap(dives => {
        const diveSiteStringObservables = dives.map(
          (dive: Dive) => {
            return this.diveSiteService.getDiveSite(dive.dive_site)
              .pipe(map(diveSite => {
                return diveSite.name
              }))
          }
        )
        return combineLatest(diveSiteStringObservables)
      }))
  }

  getDiveSitesFrequentation(userId) {
    let diveSitesFrequentation: Object[] = []
    return this.getDiveSitesFromDives(userId).pipe(map(diveSitesName => {
      diveSitesName.sort()
      let current = null
      let cnt = 0

      diveSitesName.forEach((diveSiteName, i) => {
        if (diveSiteName != current) {
          if (cnt > 0) {
            diveSitesFrequentation.push({ name: current, value: cnt })
          }
          current = diveSiteName;
          cnt = 1;
        } else {
          cnt++;
        }
      })
      if (cnt > 0) {
        diveSitesFrequentation.push({ name: current, value: cnt })
      }
      return diveSitesFrequentation
    }))
  }

  getDiveSiteDepth(userId: string, diveSiteId: string) {
    let data: Object[] = []
    let tempData: Object[] = []
    return this.angularFireStore
      .collection<Dive>(this.colDive, sort => sort.where('diver', '==', userId)
        .where('dive_site', '==', diveSiteId).orderBy('number'))
      .valueChanges()
      .pipe(map(dives => {
        dives.forEach(dive => {
          let date = new Date(0)
          date.setSeconds(dive.date.seconds + 3600)
          tempData.push({ name: date, value: Number(dive.depth) })
        })
        data.push({ name: diveSiteId, series: tempData })
        return data
      }))
  }


}
