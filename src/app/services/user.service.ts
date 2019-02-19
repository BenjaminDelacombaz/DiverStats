import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireAuth: AngularFireAuth) { }

  async login(user: User) {
    await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    user.id = this.fireAuth.auth.currentUser.uid
    return user
  }

  fetchUser(formValues: any): User {
    return new User('', formValues.email, formValues.password)
  }
}
