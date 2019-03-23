import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBuddiesComponent } from './select-buddies.component';

describe('SelectBuddiesComponent', () => {
  let component: SelectBuddiesComponent;
  let fixture: ComponentFixture<SelectBuddiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBuddiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBuddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
