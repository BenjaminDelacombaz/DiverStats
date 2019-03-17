import { Component, OnInit } from '@angular/core';
import { BuddyService } from 'src/app/services/buddy.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Buddy } from 'src/app/models/buddy';

@Component({
  selector: 'app-buddies-table',
  templateUrl: './buddies-table.component.html',
  styleUrls: ['./buddies-table.component.scss']
})
export class BuddiesTableComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone', 'birthdate', 'public', 'action']

  constructor(
    private buddyService: BuddyService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  openConfirmDeleteDialog(buddy: Buddy): void {
    const dialogRef = this.dialog.open(ConfirmComponent,{width: '50%'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete ressource
        this.buddyService.delete(buddy)
      }    
    });
  }

}
