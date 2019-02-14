import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  private hideState: boolean = true

  // Initialize the form group
  private loginForm: FormGroup

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<LoginFormComponent>) {
    this.loginForm = this.fb.group({
      // Initialize all form controls
      email: [''],
      password: ['']
    })
  }

  login() {
    // Check input validation
    if (this.loginForm.valid) {
      // Validation success
      console.log(`${this.loginForm.controls.email.value}; ${this.loginForm.controls.password.value}`)
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
