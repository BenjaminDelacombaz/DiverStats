import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyFormComponent } from './buddy-form.component';

describe('BuddyFormComponent', () => {
  let component: BuddyFormComponent;
  let fixture: ComponentFixture<BuddyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuddyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuddyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
