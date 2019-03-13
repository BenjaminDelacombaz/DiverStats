import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Dive } from '../models/dive'
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DiveService {

  private divesCollection: AngularFirestoreCollection<Dive>
  dives: Observable<Dive[]>
  private colDive: string = '/dives'

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) {
    this.angularFireAuth.user.subscribe(user => { 
      this.getDives(user.uid)
    })
  }

  private getDives(userId: string) {
    this.dives = this.angularFireStore
      .collection<Dive>(this.colDive, sort => sort.where('diver', '==', userId).orderBy('number'))
      .valueChanges()
  }

}
