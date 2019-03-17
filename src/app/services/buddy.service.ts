import { Injectable } from '@angular/core';
import { Buddy } from '../models/buddy';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BuddyService {

  buddies: Observable<Buddy[]>
  private col: string = '/buddies'

  constructor(private angularFireStore: AngularFirestore) {
    this.buddies = this.getBuddies()
   }

  getBuddy(buddyId: string) {
    return this.angularFireStore
      .doc<Buddy>(`${this.col}/${buddyId}`)
      .valueChanges()
  }

  private getBuddies(onlyPublic: boolean = true) {
    return this.angularFireStore
      .collection<Buddy>(this.col, sort => sort.where('public', '==', onlyPublic))
      .snapshotChanges()
      .pipe(map(diveSites => diveSites.map(this.documentToDomainObject)))
  }

  private documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }

}
