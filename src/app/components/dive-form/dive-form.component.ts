import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { GLOBAL } from 'src/app/app.const';
import { Buddy } from 'src/app/models/buddy';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dive } from 'src/app/models/dive';
import { DiveService } from 'src/app/services/dive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dive-form',
  templateUrl: './dive-form.component.html',
  styleUrls: ['./dive-form.component.scss']
})
export class DiveFormComponent implements OnInit {

  // Initialize the form group
  private diveForm: FormGroup
  private visibilities: Array<Object> = []
  private buddies: Array<Buddy> = []

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
  }

  private removeBuddy(buddyParam: any) {
    this.buddies.splice(this.buddies.findIndex(buddy => buddy.id === buddyParam.id),1)
  }

  private create() {
    if (this.diveForm.valid) {
      // Form is valid
      let dive: Dive = {
        ...this.diveForm.getRawValue(),
        buddies: this.buddies.map(buddy => buddy.id)
      }
      try {
        this.diveService.create(dive)
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
