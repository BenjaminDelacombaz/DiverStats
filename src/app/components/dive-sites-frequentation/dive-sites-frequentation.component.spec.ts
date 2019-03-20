import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveSitesFrequentationComponent } from './dive-sites-frequentation.component';

describe('DiveSitesFrequentationComponent', () => {
  let component: DiveSitesFrequentationComponent;
  let fixture: ComponentFixture<DiveSitesFrequentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveSitesFrequentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveSitesFrequentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
