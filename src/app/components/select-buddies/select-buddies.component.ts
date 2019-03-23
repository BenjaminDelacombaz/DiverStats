import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Buddy } from 'src/app/models/buddy';

@Component({
  selector: 'app-select-buddies',
  templateUrl: './select-buddies.component.html',
  styleUrls: ['./select-buddies.component.scss']
})
export class SelectBuddiesComponent implements OnInit {

  private selectedBuddies: Observable<Buddy>[] = []
  private selectedBuddyIds: string[] = []

  constructor() { }

  ngOnInit() {
  }

}
