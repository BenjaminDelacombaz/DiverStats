import { Injectable } from '@angular/core';
import { Buddy } from '../models/buddy';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class BuddyService {

  buddies: Observable<Buddy[]>
  private col: string = '/buddies'

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
  ) {
    this.angularFireAuth.user.subscribe(user => {
      this.buddies = this.getBuddies(user.uid)
    })
  }

  getBuddy(buddyId: string) {
    return this.angularFireStore
      .doc<Buddy>(`${this.col}/${buddyId}`)
      .valueChanges()
  }

  private getBuddies(userId: string) {
    return this.angularFireStore
      .collection<Buddy>(this.col, sort => sort.where('created_by', '==', userId))
      .valueChanges()
  }

  create(buddy: Buddy) {
    this.angularFireAuth.user.subscribe(user => {
      buddy.created_by = user.uid
      this.angularFireStore
        .doc<Buddy>(`${this.col}/${this.angularFireStore.createId()}`).set(buddy)
    })
  }

  delete(buddy: Buddy) {
    console.log(buddy)
  }

}
