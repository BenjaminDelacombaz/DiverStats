import { Component, OnInit } from '@angular/core';
import { Dive } from 'src/app/models/dive';
import { Observable } from 'rxjs';
import { DiveService } from 'src/app/services/dive.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-dive',
  templateUrl: './edit-dive.component.html',
  styleUrls: ['./edit-dive.component.scss']
})
export class EditDiveComponent implements OnInit {

  private dive: Observable<Dive>
  private diveId: string

  constructor(
    private route: ActivatedRoute,
    private diveService: DiveService
  ) { }

  ngOnInit() {
    this.diveId = this.route.snapshot.paramMap.get('id')
    this.dive = this.diveService.getDive(this.diveId)
  }

}
