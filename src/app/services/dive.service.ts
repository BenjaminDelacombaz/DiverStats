import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Dive } from '../models/dive'
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators'
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

  create(dive: Dive) {
    try {
      this.angularFireAuth.user.subscribe(user => {
        this.getDives(user.uid).pipe(first()).subscribe(dives => {
          dive.number = dives.length + 1
          dive.diver = user.uid
          this.angularFireStore
            .doc<Dive>(`${this.colDive}/${this.angularFireStore.createId()}`).set(dive)
        })
      })
    } catch(err) {
      console.log(err)
    }
  }

}
