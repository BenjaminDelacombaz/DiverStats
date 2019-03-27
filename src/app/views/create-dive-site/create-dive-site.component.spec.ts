import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiveSiteComponent } from './create-dive-site.component';

describe('CreateDiveSiteComponent', () => {
  let component: CreateDiveSiteComponent;
  let fixture: ComponentFixture<CreateDiveSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiveSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiveSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
