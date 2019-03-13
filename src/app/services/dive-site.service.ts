import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DiveSite } from '../models/dive-site';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiveSiteService {

  diveSites: Observable<DiveSite[]>
  private colDive: string = '/dive_sites'

  constructor(private angularFireStore: AngularFirestore) {}

  getDiveSite(diveSiteId: string) {
    return this.angularFireStore
      .doc<DiveSite>(`${this.colDive}/${diveSiteId}`)
      .valueChanges()
  }
}
