import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { GLOBAL } from 'src/app/app.const';
import { Buddy } from 'src/app/models/buddy';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dive } from 'src/app/models/dive';
import { DiveService } from 'src/app/services/dive.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dive-form',
  templateUrl: './dive-form.component.html',
  styleUrls: ['./dive-form.component.scss']
})
export class DiveFormComponent implements OnInit {

  // Initialize the form group
  private diveForm: FormGroup
  private visibilities: Array<Object> = []
  private buddies: Observable<Buddy>[] = []
  private buddyIds: string[] = []

  @Input()
  private dive: Observable<Dive> = null
  @Input()
  private diveId: string = null

  constructor(
    private fb: FormBuilder,
    private diveSiteService: DiveSiteService,
    private snackBar: MatSnackBar,
    private diveService: DiveService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // Set visibilities
    this.visibilities = GLOBAL.visibilities
    // Init form group
    this.diveForm = this.fb.group({
      // Initialize all form controls
      dive_site: ['', Validators.required],
      date: ['', Validators.required],
      depth: ['', Validators.required],
      duration: ['', Validators.required],
      temperature: ['', Validators.required],
      visibility: ['', Validators.required],
      comments:  ['', Validators.required],
    })
    if (this.dive != null) {
      this.dive.subscribe(dive => {
        let date = new Date(0)
        date.setSeconds(dive.date.seconds + 3600)
        this.diveForm.setValue(
          {
            dive_site: dive.dive_site,
            date: date,
            depth: dive.depth,
            duration: dive.depth,
            temperature: dive.temperature,
            visibility: dive.visibility.toString(),
            comments: dive.comments
          })
          this.buddyIds = dive.buddies
          this.buddies = dive.fullBuddies
      })
    }
  }

  private removeBuddy(buddyParam: Observable<Buddy>) {
    let i = this.buddies.findIndex(buddy => buddy === buddyParam)
    this.buddies.splice(i,1)
    this.buddyIds.splice(i,1)
  }

  private save() {
    if (this.diveForm.valid) {
      // Form is valid
      let dive: Dive = {
        ...this.diveForm.getRawValue(),
        buddies: this.buddyIds
      }
      try {
        if(this.diveId == null) {
          this.diveService.create(dive)
        } else {
          this.diveService.update(dive, this.diveId)
        }
        this.router.navigate(['/dives'])
      } catch(err) {
        this.snackBar.open(err.message,'Close',{ duration: 10000, panelClass: 'snack-error' })
      }
    } else {
      // Validation error
      this.snackBar.open('Please check that all fields are filled in.','Close',{ duration: 10000, panelClass: 'snack-error' })
    }
  }

}
