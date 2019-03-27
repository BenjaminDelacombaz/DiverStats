import { Injectable } from '@angular/core';
import { Buddy } from '../models/buddy';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class BuddyService {
  
  private col: string = '/buddies'

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
  ) { }

  getBuddy(buddyId: string) {
    return this.angularFireStore
      .doc<Buddy>(`${this.col}/${buddyId}`)
      .valueChanges()
  }

  getBuddies(userId: string) {
    return this.angularFireStore
      .collection<Buddy>(this.col, sort => sort.where('created_by', '==', userId))
      .snapshotChanges()
      .pipe(map(buddies => buddies.map(this.documentToDomainObject)))
  }

  create(buddy: Buddy) {
    this.angularFireAuth.user.pipe(first()).subscribe(user => {
      buddy.created_by = user.uid
      this.angularFireStore
        .doc<Buddy>(`${this.col}/${this.angularFireStore.createId()}`).set(buddy)
    })
  }

  update(buddy: Buddy, buddyId: string) {
    this.angularFireAuth.user.pipe(first()).subscribe(user => {
      buddy.created_by = user.uid
      this.angularFireStore
        .doc<Buddy>(`${this.col}/${buddyId}`).update(buddy)
    })
  }

  delete(buddy: Buddy) {
    return this.angularFireStore.doc<Buddy>(`${this.col}/${buddy.id}`).delete()
  }

  private documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }

}
