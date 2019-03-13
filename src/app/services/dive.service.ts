import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Dive } from '../models/dive'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import { DiveSiteService } from './dive-site.service';

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
    private diveSiteService: DiveSiteService
  ) {
    this.angularFireAuth.user.subscribe(user => {
      this.getDives(user.uid)
    })
  }

  private getDives(userId: string) {
    this.dives = this.angularFireStore
      .collection<Dive>(this.colDive, sort => sort.where('diver', '==', userId).orderBy('number'))
      .valueChanges()
      .pipe(map(e => e.map(e => {
        return {
          ...e,
          fullDiveSite: this.diveSiteService.getDiveSite(e.dive_site)
        }
      })))
  }

}
