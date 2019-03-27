import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DiveService } from 'src/app/services/dive.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dive-sites-frequentation',
  templateUrl: './dive-sites-frequentation.component.html',
  styleUrls: ['./dive-sites-frequentation.component.scss']
})
export class DiveSitesFrequentationComponent implements OnInit {

  // charts options
  view: any[] = [700, 400];
  showLegend = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public afAuth: AngularFireAuth, public diveService: DiveService) { }

  ngOnInit() {
    // this.afAuth.user.subscribe(user => {
    //   this.diveService.getDiveSitesFrequentation(user.uid).subscribe(values => {this.data = values})
    // })
   }

  onSelect(event) {
    console.log(event);
  }

}
