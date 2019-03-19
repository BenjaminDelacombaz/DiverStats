import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddiesTableComponent } from './buddies-table.component';

describe('BuddiesTableComponent', () => {
  let component: BuddiesTableComponent;
  let fixture: ComponentFixture<BuddiesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuddiesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuddiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
