import { Component, OnInit } from '@angular/core';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DiveSite } from 'src/app/models/dive-site';

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

}
