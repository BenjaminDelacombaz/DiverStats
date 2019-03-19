import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveSiteDepthChartComponent } from './dive-site-depth-chart.component';

describe('DiveSiteDepthChartComponent', () => {
  let component: DiveSiteDepthChartComponent;
  let fixture: ComponentFixture<DiveSiteDepthChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveSiteDepthChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveSiteDepthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
