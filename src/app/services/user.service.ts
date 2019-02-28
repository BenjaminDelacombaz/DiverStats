import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileService } from './profile.service';
import { UserInfo } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: Observable<UserInfo>

  constructor(private profileService: ProfileService, private fireAuth: AngularFireAuth) { }

  async login({ email, password }) {
    await this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    this.currentUser = this.fireAuth.user
  }

  logout() {
    this.fireAuth.auth.signOut()
  }

  get CurrentUser() {
    return this.currentUser
  }
}
