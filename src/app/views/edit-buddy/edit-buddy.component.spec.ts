import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuddyComponent } from './edit-buddy.component';

describe('EditBuddyComponent', () => {
  let component: EditBuddyComponent;
  let fixture: ComponentFixture<EditBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
