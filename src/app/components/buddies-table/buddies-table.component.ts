import { Component, OnInit } from '@angular/core';
import { BuddyService } from 'src/app/services/buddy.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Buddy } from 'src/app/models/buddy';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buddies-table',
  templateUrl: './buddies-table.component.html',
  styleUrls: ['./buddies-table.component.scss']
})
export class BuddiesTableComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone', 'birthdate', 'public', 'action']

  constructor(
    private buddyService: BuddyService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  private openConfirmDeleteDialog(buddy: Buddy): void {
    const dialogRef = this.dialog.open(ConfirmComponent,
      {
        width: '50%',
        data: `Do you really want to delete this buddy: ${buddy.firstname} ${buddy.lastname}?`
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        try {
          // Delete ressource
          this.buddyService.delete(buddy)
        } catch (err) {
          // Deletion error
          this.snackBar.open('An error occurred during deletion.', 'Close', { duration: 10000, panelClass: 'snack-error' })
        }
      }
    })
  }

}
