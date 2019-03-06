import { Component, OnInit } from '@angular/core';
import { DiveService } from 'src/app/services/dive.service';

@Component({
  selector: 'app-dives-table',
  templateUrl: './dives-table.component.html',
  styleUrls: ['./dives-table.component.scss']
})
export class DivesTableComponent implements OnInit {
  
  displayedColumns: string[] = ['number', 'dive-site', 'depth', 'duration', 'buddies', 'visibility', 'temperature', 'comments']

  constructor(private diveService: DiveService) { }

  async ngOnInit() {
    this.diveService.getDives()
  }

}
