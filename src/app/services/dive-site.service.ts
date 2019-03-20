import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DiveSite } from '../models/dive-site';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DiveSiteService {

  diveSites: any
  private col: string = '/dive_sites'

  constructor(private angularFireStore: AngularFirestore) {
    this.diveSites = this.getDiveSites()
  }

  getDiveSite(diveSiteId: string) {
    return this.angularFireStore
      .doc<DiveSite>(`${this.col}/${diveSiteId}`)
      .valueChanges()
  }

  getDiveSites() {
    return this.angularFireStore.collection<DiveSite>(this.col).snapshotChanges()
    .pipe(map(diveSites => diveSites.map(this.documentToDomainObject)))
  }

  private documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }

  create(diveSite: DiveSite) {
    this.angularFireStore
      .doc<DiveSite>(`${this.col}/${this.angularFireStore.createId()}`).set(diveSite)
  }

  update(diveSite: DiveSite, diveSiteId: string) {
      this.angularFireStore
        .doc<DiveSite>(`${this.col}/${diveSiteId}`).update(diveSite)
  }

  delete(diveSite: DiveSite) {
    return this.angularFireStore.doc<DiveSite>(`${this.col}/${diveSite.id}`).delete()
  }
}
