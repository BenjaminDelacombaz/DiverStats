import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User = null

  constructor(private fireAuth: AngularFireAuth) { }

  async login(user: User) {
    await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    user.id = this.fireAuth.auth.currentUser.uid
    this.setCurrentUser(user)
  }

  logout() {
    this.currentUser = null
    this.fireAuth.auth.signOut()
  }

  fetchUser(formValues: any): User {
    return new User('', formValues.email, formValues.password)
  }

  private setCurrentUser(user: User): void {
    user.password = ''
    this.currentUser = user
  }

  get CurrentUser() {
    return this.currentUser
  }
}
