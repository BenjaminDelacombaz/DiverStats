import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiveSiteService } from 'src/app/services/dive-site.service';

@Component({
  selector: 'app-create-dive-form',
  templateUrl: './create-dive-form.component.html',
  styleUrls: ['./create-dive-form.component.scss']
})
export class CreateDiveFormComponent implements OnInit {

  // Initialize the form group
  private diveForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private diveSiteService: DiveSiteService
    ) { }

  ngOnInit(): void {
    this.diveForm = this.fb.group({
      // Initialize all form controls
      diveSite: ['', Validators.required],
      date: ['', Validators.required],
      depth: ['', Validators.required],
      duration: ['', Validators.required],
    })
  }

}
