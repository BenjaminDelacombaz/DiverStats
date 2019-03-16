import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiveFormComponent } from './create-dive-form.component';

describe('CreateDiveFormComponent', () => {
  let component: CreateDiveFormComponent;
  let fixture: ComponentFixture<CreateDiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
