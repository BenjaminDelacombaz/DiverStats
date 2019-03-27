import { Component, OnInit } from '@angular/core';
import { DiveService } from 'src/app/services/dive.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { DiveSite } from 'src/app/models/dive-site';

@Component({
  selector: 'app-dive-site-depth-chart',
  templateUrl: './dive-site-depth-chart.component.html',
  styleUrls: ['./dive-site-depth-chart.component.scss']
})
export class DiveSiteDepthChartComponent implements OnInit {

  dataObs: Observable<Object[]>
  diveSites: Observable<DiveSite[]>
  selectedDiveSite: string
  // charts options
  view: any[] = [700, 400];
  showLegend = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    public diveService: DiveService,
    public afAuth: AngularFireAuth,
    public diveSiteService: DiveSiteService) { }

  ngOnInit() {
    this.diveSites = this.diveSiteService.getDiveSites()
    this.diveSites.subscribe(diveSites => {
      this.selectedDiveSite = diveSites[0].id
      this.changeDiveSite()
    })
  }

  changeDiveSite() {
    this.afAuth.user.subscribe(user => {
      this.dataObs = this.diveService.getDiveSiteDepth(user.uid, this.selectedDiveSite)
    })
  }
}
