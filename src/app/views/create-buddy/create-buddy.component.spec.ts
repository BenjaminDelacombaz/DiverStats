import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuddyComponent } from './create-buddy.component';

describe('CreateBuddyComponent', () => {
  let component: CreateBuddyComponent;
  let fixture: ComponentFixture<CreateBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
