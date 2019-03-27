import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveSiteFormComponent } from './dive-site-form.component';

describe('DiveSiteFormComponent', () => {
  let component: DiveSiteFormComponent;
  let fixture: ComponentFixture<DiveSiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveSiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveSiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
