import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  private hideState: boolean = true

  constructor(private dialogRef: MatDialogRef<LoginFormComponent>) {}

  ngOnInit() {
  }

  private cancel(): void {
    this.dialogRef.close()
  }

  private hide(): void {
    this.hideState = !this.hideState
  }
}
