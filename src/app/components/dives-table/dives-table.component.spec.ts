import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivesTableComponent } from './dives-table.component';

describe('DivesTableComponent', () => {
  let component: DivesTableComponent;
  let fixture: ComponentFixture<DivesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
