import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DiveSiteService } from 'src/app/services/dive-site.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DiveSite } from 'src/app/models/dive-site';
import { GLOBAL } from 'src/app/app.const';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-dive-site-form',
  templateUrl: './dive-site-form.component.html',
  styleUrls: ['./dive-site-form.component.scss']
})
export class DiveSiteFormComponent implements OnInit {

  private diveSiteForm: FormGroup

  @Input()
  private diveSite: Observable<DiveSite> = null
  @Input()
  private diveSiteId: string = null

  private waterTypes: Array<Object> = []
  private difficulties: Array<Object> = []

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private diveSiteService: DiveSiteService,
    private router: Router) { }

  ngOnInit() {
    // Set water types
    this.waterTypes = GLOBAL.waterTypes
    // Set difficulties
    this.difficulties = GLOBAL.difficulties
    // Init form group
    this.diveSiteForm = this.fb.group({
      // Initialize all form controls
      name: ['', Validators.required],
      water_type: ['', Validators.required],
      difficulty: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
      description: ['', Validators.required]
    })
    if (this.diveSiteId != null) {
      this.diveSite.subscribe(diveSite => {
        this.diveSiteForm.setValue(
          {
            name: diveSite.name,
            water_type: diveSite.water_type.toString(),
            difficulty: diveSite.difficulty.toString(),
            longitude: diveSite.location._long,
            latitude: diveSite.location._lat,
            description: diveSite.description
          })
      })
    }
  }

  private save() {
    if (this.diveSiteForm.valid) {
      // Form is valid
      let diveSite: DiveSite = {
        ...this.diveSiteForm.getRawValue(),
        location: new firebase.firestore.GeoPoint(Number(this.diveSiteForm.getRawValue().latitude), Number(this.diveSiteForm.getRawValue().longitude)),
        water_type: Number(this.diveSiteForm.getRawValue().water_type),
        difficulty: Number(this.diveSiteForm.getRawValue().difficulty)
      }
      // Delete unused property
      delete diveSite['longitude']
      delete diveSite['latitude']
      try {
        if (this.diveSiteId == null) {
          this.diveSiteService.create(diveSite)
        } else {
          this.diveSiteService.update(diveSite,this.diveSiteId)
        }
        this.router.navigate(['/dive-sites'])
      } catch (err) {
        this.snackBar.open(err.message, 'Close', { duration: 10000, panelClass: 'snack-error' })
      }
    } else {
      // Validation error
      this.snackBar.open('Please check that all fields are filled in.', 'Close', { duration: 10000, panelClass: 'snack-error' })
    }
  }

}
