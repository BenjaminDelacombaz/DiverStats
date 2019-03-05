import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Dive } from '../models/dive'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiveService {

  private divesCollection: AngularFirestoreCollection<Dive>
  dives: Observable<Dive[]>
  private colDive: string = '/dives'

  constructor(private angularFireStore: AngularFirestore) {
    this.divesCollection = angularFireStore.collection<Dive>(this.colDive)
    this.dives = this.divesCollection.valueChanges()
   }
}
