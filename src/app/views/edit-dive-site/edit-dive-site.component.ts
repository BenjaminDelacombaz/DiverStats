import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { DiveSite } from 'src/app/models/dive-site';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-dive-site',
  templateUrl: './edit-dive-site.component.html',
  styleUrls: ['./edit-dive-site.component.scss']
})
export class EditDiveSiteComponent implements OnInit {

  diveSite: Observable<DiveSite>
  diveSiteId: string

  constructor(public route: ActivatedRoute,
    public diveSiteService: DiveSiteService) { }

  ngOnInit() {
    this.diveSiteId = this.route.snapshot.paramMap.get('id');
    this.diveSite = this.diveSiteService.getDiveSite(this.diveSiteId)
  }

}
