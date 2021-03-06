import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuddyService } from 'src/app/services/buddy.service';
import { Buddy } from 'src/app/models/buddy';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-buddy',
  templateUrl: './edit-buddy.component.html',
  styleUrls: ['./edit-buddy.component.scss']
})
export class EditBuddyComponent implements OnInit {

  private buddy: Observable<Buddy>
  private buddyId: string

  constructor(
    private route: ActivatedRoute,
    private buddyService: BuddyService
  ) { }

  ngOnInit() {
    this.buddyId = this.route.snapshot.paramMap.get('id');
    this.buddy = this.buddyService.getBuddy(this.buddyId)
  }

}
