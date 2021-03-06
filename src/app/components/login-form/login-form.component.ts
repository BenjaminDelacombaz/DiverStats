import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  private hideState: boolean = true

  // Initialize the form group
  private loginForm: FormGroup

  constructor(private snackBar: MatSnackBar, private userService: UserService, private fb: FormBuilder, private dialogRef: MatDialogRef<LoginFormComponent>) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // Initialize all form controls
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  async login() {
    // Check input validation
    if (this.loginForm.valid) {
      // Validation success
      try {
        await this.userService.login(this.loginForm.getRawValue())
        this.dialogRef.close()
      } catch (e) {
        // Firebase error
        this.snackBar.open(e.message,'Close',{ duration: 10000, panelClass: 'snack-error' })
      }
    } else {
      // Validation error
      this.snackBar.open('Please check that all fields are filled in.','Close',{ duration: 10000, panelClass: 'snack-error' })
    }
  }

  private cancel(): void {
    this.dialogRef.close()
  }

  private hide(): void {
    this.hideState = !this.hideState
  }
}
