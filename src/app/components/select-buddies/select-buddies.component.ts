import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Buddy } from 'src/app/models/buddy';
import { BuddiesTableComponent } from '../buddies-table/buddies-table.component';
import { BuddyService } from 'src/app/services/buddy.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-buddies',
  templateUrl: './select-buddies.component.html',
  styleUrls: ['./select-buddies.component.scss']
})
export class SelectBuddiesComponent implements OnInit {

  private selectedBuddies: Observable<Buddy>[] = []
  private selectedBuddyIds: string[] = []

  @ViewChild(BuddiesTableComponent) buddiesTableComponent;

  constructor(
    public buddyService: BuddyService,
    public dialogRef: MatDialogRef<SelectBuddiesComponent>) { }

  ngOnInit() {
  }

  addBuddies() {
    this.buddiesTableComponent.selection.selected.forEach(buddy => {
      this.selectedBuddyIds.push(buddy.id)
      this.selectedBuddies.push(this.buddyService.getBuddy(buddy.id))
    })
    this.dialogRef.close({buddies: this.selectedBuddies, buddyIds: this.selectedBuddyIds})
  }

}
