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

  private diveSite: Observable<DiveSite>
  private diveSiteId: string

  constructor(private route: ActivatedRoute,
    private diveSiteService: DiveSiteService) { }

  ngOnInit() {
    this.diveSiteId = this.route.snapshot.paramMap.get('id');
    this.diveSite = this.diveSiteService.getDiveSite(this.diveSiteId)
  }

}
