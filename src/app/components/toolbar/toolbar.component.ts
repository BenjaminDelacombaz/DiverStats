import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '80%',
    });
  }

  logout(): void {
    this.userService.logout()
  }

}
