import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Dive } from '../models/dive'
import { Observable, combineLatest } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators'
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

  private getDives(userId: string) {
    return this.angularFireStore
      .collection<Dive>(this.colDive, sort => sort.where('diver', '==', userId).orderBy('number'))
      .valueChanges()
      .pipe(map(dives => dives.map(dive => {
        return {
          ...dive,
          fullDiveSite: this.diveSiteService.getDiveSite(dive.dive_site),
          fullBuddies: dive.buddies.map(buddyId => { return this.buddyService.getBuddy(buddyId) })
        }
      })))
  }

  old_getDiveSitesFrequentation(userId: string) {
    return this.angularFireStore
      .collection<any>(this.colDive, sort => sort.where('diver', '==', userId))
      .valueChanges()
      .pipe(map(dives => {
        let tempDiveSites: Array<string> = []
        let tempCountDiveSites: Array<number> = []
        let returnValue: Array<Object> = []
        dives.map(dive => {
          let index: number = tempDiveSites.indexOf(dive.dive_site)
          if (index < 0) {
            // Not in the array
            tempDiveSites.push(dive.dive_site)
            tempCountDiveSites.push(1)
          } else {
            // Already in the array
            tempCountDiveSites[index] += 1
          }
        })
        tempDiveSites.forEach((diveSite, i) => {
          //this.diveSiteService.getDiveSite(diveSite).subscribe(diveSite => {
          let value = { 'name': diveSite, 'value': tempCountDiveSites[i] }
          returnValue.push(value)
          //})
        })
        return returnValue
      }))
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
