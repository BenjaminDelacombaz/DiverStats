import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiveSiteComponent } from './edit-dive-site.component';

describe('EditDiveSiteComponent', () => {
  let component: EditDiveSiteComponent;
  let fixture: ComponentFixture<EditDiveSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiveSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiveSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
