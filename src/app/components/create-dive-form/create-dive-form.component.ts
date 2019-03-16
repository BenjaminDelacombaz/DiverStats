import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { GLOBAL } from 'src/app/app.const';
import { Buddy } from 'src/app/models/buddy';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dive } from 'src/app/models/dive';
import { DiveService } from 'src/app/services/dive.service';

@Component({
  selector: 'app-create-dive-form',
  templateUrl: './create-dive-form.component.html',
  styleUrls: ['./create-dive-form.component.scss']
})
export class CreateDiveFormComponent implements OnInit {

  // Initialize the form group
  private diveForm: FormGroup
  private visibilities: Array<Object> = []
  private buddies: Array<Buddy> = []

  constructor(
    private fb: FormBuilder,
    private diveSiteService: DiveSiteService,
    private snackBar: MatSnackBar,
    private diveService: DiveService,
    ) { }

  ngOnInit(): void {
    // Set visibilities
    this.visibilities = GLOBAL.visibilities
    // Init form group
    this.diveForm = this.fb.group({
      // Initialize all form controls
      dive_site: ['', Validators.required],
      date: ['', Validators.required],
      depth: ['65', Validators.required],
      duration: ['75', Validators.required],
      temperature: ['7', Validators.required],
      visibility: ['3', Validators.required],
      comments:  ['Très jolie', Validators.required],
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
      this.diveService.create(dive)
    } else {
      // Validation error
      this.snackBar.open('Please check that all fields are filled in.','Close',{ duration: 10000, panelClass: 'snack-error' })
    }
  }

}
