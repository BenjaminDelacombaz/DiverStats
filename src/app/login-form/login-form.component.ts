import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginFormComponent>) {}

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close()
  }
}
