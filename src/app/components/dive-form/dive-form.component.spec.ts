import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveFormComponent } from './dive-form.component';

describe('DiveFormComponent', () => {
  let component: DiveFormComponent;
  let fixture: ComponentFixture<DiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
