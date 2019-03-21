import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveSitesComponent } from './dive-sites.component';

describe('DiveSitesComponent', () => {
  let component: DiveSitesComponent;
  let fixture: ComponentFixture<DiveSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
