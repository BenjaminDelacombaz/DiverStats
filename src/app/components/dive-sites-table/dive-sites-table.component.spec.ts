import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveSitesTableComponent } from './dive-sites-table.component';

describe('DiveSitesTableComponent', () => {
  let component: DiveSitesTableComponent;
  let fixture: ComponentFixture<DiveSitesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveSitesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveSitesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
