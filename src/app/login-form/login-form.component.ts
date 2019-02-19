import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  private hideState: boolean = true

  // Initialize the form group
  private loginForm: FormGroup

  constructor(private userService: UserService, private fb: FormBuilder, private dialogRef: MatDialogRef<LoginFormComponent>) {
    this.loginForm = this.fb.group({
      // Initialize all form controls
      email: [''],
      password: ['']
    })
  }

  async login() {
    // Check input validation
    if (this.loginForm.valid) {
      // Validation success
      try {
        await this.userService.login(this.userService.fetchUser(this.loginForm.value))
        console.log(UserService.CurrentUser)
      } catch (e) {
        console.error(e.message)
      }
    } else {
      // Validation error
    }
  }

  private cancel(): void {
    this.dialogRef.close()
  }

  private hide(): void {
    this.hideState = !this.hideState
  }
}
