import { Component, OnInit } from '@angular/core';
import { BuddyService } from 'src/app/services/buddy.service';

@Component({
  selector: 'app-buddies-table',
  templateUrl: './buddies-table.component.html',
  styleUrls: ['./buddies-table.component.scss']
})
export class BuddiesTableComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone', 'birthdate', 'public']

  constructor(private buddyService: BuddyService) { }

  ngOnInit() {
  }

}
