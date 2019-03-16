import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Dive } from '../models/dive'
import { Observable } from 'rxjs';
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
  private colDive: string = '/dives'

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private diveSiteService: DiveSiteService,
    private buddyService: BuddyService
  ) {
    this.angularFireAuth.user.subscribe(user => {
      this.dives = this.getDives(user.uid)
      this.getDiveSitesFrequentation(user.uid)
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

  getDiveSitesFrequentation(userId: string): void {
    this.getDives(userId)
    .pipe(map(dives => mergeMap(
      (dive: Dive) => this.diveSiteService.getDiveSite(dive.dive_site)
      .pipe(map(diveSite => { return dive.number + ' ' + diveSite.name }))
    ))).subscribe(v => console.log(v))
    
    
    /*return this.angularFireStore
      .doc<Dive>(`${this.colDive}/EmMrmiyfB2lw2y2F6bBH`)
      .valueChanges()
      .pipe(mergeMap(dive => this.diveSiteService.getDiveSite(dive.dive_site)
      .pipe(map(
        diveSite => { return dive.number + ' ' + diveSite.name }
      ))))
      .subscribe(v => console.log(v))*/
  }

}
