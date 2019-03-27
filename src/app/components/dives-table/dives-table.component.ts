import { Component } from '@angular/core';
import { DiveService } from 'src/app/services/dive.service';
import { Observable } from 'rxjs';
import { DiveSite } from 'src/app/models/dive-site';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Dive } from 'src/app/models/dive';

@Component({
  selector: 'app-dives-table',
  templateUrl: './dives-table.component.html',
  styleUrls: ['./dives-table.component.scss']
})
export class DivesTableComponent {
  
  dives: Observable<Dive[]>

  displayedColumns: string[] = ['number', 'dive-site', 'date', 'depth', 'duration', 'buddies', 'visibility', 'temperature', 'comments', 'action']
  constructor(
    public diveService: DiveService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public router: Router,
    public afAuth: AngularFireAuth) {
      this.afAuth.user.subscribe(user => {
        this.dives = this.diveService.getDives(user.uid)
      })
    }

  private openConfirmDeleteDialog(dive: Dive): void {
    const dialogRef = this.dialog.open(ConfirmComponent,
      {
        width: '50%',
        data: `Do you really want to delete this dive: N° ${dive.number}?`
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        try {
          // Delete ressource
          this.diveService.delete(dive)
        } catch (err) {
          // Deletion error
          this.snackBar.open('An error occurred during deletion.', 'Close', { duration: 10000, panelClass: 'snack-error' })
        }
      }
    })
  }
}
