import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiveComponent } from './create-dive.component';

describe('CreateDiveComponent', () => {
  let component: CreateDiveComponent;
  let fixture: ComponentFixture<CreateDiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
