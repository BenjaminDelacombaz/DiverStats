import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiveComponent } from './edit-dive.component';

describe('EditDiveComponent', () => {
  let component: EditDiveComponent;
  let fixture: ComponentFixture<EditDiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
