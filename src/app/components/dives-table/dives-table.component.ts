import { Component } from '@angular/core';
import { DiveService } from 'src/app/services/dive.service';
import { Observable } from 'rxjs';
import { DiveSite } from 'src/app/models/dive-site';

@Component({
  selector: 'app-dives-table',
  templateUrl: './dives-table.component.html',
  styleUrls: ['./dives-table.component.scss']
})
export class DivesTableComponent {
  
  test: Observable<DiveSite>

  displayedColumns: string[] = ['number', 'dive-site', 'date', 'depth', 'duration', 'buddies', 'visibility', 'temperature', 'comments']
  constructor(private diveService: DiveService) { }
}
