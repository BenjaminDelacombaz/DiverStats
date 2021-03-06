import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfo } from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: Observable<UserInfo>
  private docProfile: string = '/profiles'
  private currentProfile: Observable<Profile>

  constructor(private fireStore: AngularFirestore, private fireAuth: AngularFireAuth) {
    this.isLogged()
   }

  async login({ email, password }) {
    // Login
    await this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    this.setUser()
  }

  logout() {
    this.fireAuth.auth.signOut()
  }

  get CurrentUser() {
    return this.currentUser
  }

  get CurrentProfile() {
    return this.currentProfile
  }

  private isLogged() {
    this.fireAuth.user.subscribe(user => {
      if (user != null) {
        this.setUser()
      }
    })
  }

  private setUser() {
    this.currentUser = this.fireAuth.user
    // Get the user profile
    this.currentProfile = this.fireStore.doc<Profile>(`${this.docProfile}/${this.fireAuth.auth.currentUser.uid}`).valueChanges()
  }
    
}
