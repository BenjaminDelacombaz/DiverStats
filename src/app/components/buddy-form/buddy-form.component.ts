import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuddyService } from 'src/app/services/buddy.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'hammerjs'
import { Buddy } from 'src/app/models/buddy';

@Component({
  selector: 'app-buddy-form',
  templateUrl: './buddy-form.component.html',
  styleUrls: ['./buddy-form.component.scss']
})
export class BuddyFormComponent implements OnInit {

  private buddyForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private buddyServide: BuddyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Init form group
    this.buddyForm = this.fb.group({
      // Initialize all form controls
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      birthdate: ['', Validators.required],
      public: [false, Validators.required],
    })
  }

  private create() {
    if (this.buddyForm.valid) {
      // Form is valid
      let buddy: Buddy = {
        ...this.buddyForm.getRawValue(),
      }
      try {
        this.buddyServide.create(this.buddyForm.getRawValue())
        this.router.navigate(['/buddies'])
      } catch(err) {
        this.snackBar.open(err.message,'Close',{ duration: 10000, panelClass: 'snack-error' })
      }
    } else {
      // Validation error
      this.snackBar.open('Please check that all fields are filled in.','Close',{ duration: 10000, panelClass: 'snack-error' })
    }
  }

}
