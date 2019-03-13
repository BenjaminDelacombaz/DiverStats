import { Component } from '@angular/core';
import { DiveService } from 'src/app/services/dive.service';
import { bypassSanitizationTrustUrl } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-dives-table',
  templateUrl: './dives-table.component.html',
  styleUrls: ['./dives-table.component.scss']
})
export class DivesTableComponent {
  
  displayedColumns: string[] = ['number', 'dive-site', 'date', 'depth', 'duration', 'buddies', 'visibility', 'temperature', 'comments']
  constructor(private diveService: DiveService) { }
}
