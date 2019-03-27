import { Component, OnInit } from '@angular/core';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DiveSite } from 'src/app/models/dive-site';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-dive-sites-table',
  templateUrl: './dive-sites-table.component.html',
  styleUrls: ['./dive-sites-table.component.scss']
})
export class DiveSitesTableComponent implements OnInit {

  private displayedColumns: string[] = ['name', 'water_type', 'difficulty', 'description', 'action']
  private diveSites: Observable<DiveSite[]>

  constructor(private diveSiteService: DiveSiteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.diveSites = this.diveSiteService.getDiveSites()
  }

  private openConfirmDeleteDialog(diveSite: DiveSite): void {
    const dialogRef = this.dialog.open(ConfirmComponent,
      {
        width: '50%',
        data: `Do you really want to delete this buddy: ${diveSite.name}?`
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          try {
            // Delete ressource
            this.diveSiteService.delete(diveSite)
          } catch (err) {
            // Deletion error
            this.snackBar.open('An error occurred during deletion.', 'Close', { duration: 10000, panelClass: 'snack-error' })
          }
        }
      })
    }
}
