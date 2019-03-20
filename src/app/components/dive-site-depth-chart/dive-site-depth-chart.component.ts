import { Component, OnInit } from '@angular/core';
import { DiveService } from 'src/app/services/dive.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { DiveSiteService } from 'src/app/services/dive-site.service';

@Component({
  selector: 'app-dive-site-depth-chart',
  templateUrl: './dive-site-depth-chart.component.html',
  styleUrls: ['./dive-site-depth-chart.component.scss']
})
export class DiveSiteDepthChartComponent implements OnInit {

  dataObs: Observable<Object[]>

  // charts options
  view: any[] = [700, 400];
  showLegend = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private diveService: DiveService,
    private afAuth: AngularFireAuth,
    private diveSite: DiveSiteService) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      this.dataObs = this.diveService.getDiveSiteDepth(user.uid, 'lDziMqt5y37mJxKbf9NT')
    })
  }

}
