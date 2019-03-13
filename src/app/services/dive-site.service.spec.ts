import { TestBed } from '@angular/core/testing';

import { DiveSiteService } from './dive-site.service';

describe('DiveSiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiveSiteService = TestBed.get(DiveSiteService);
    expect(service).toBeTruthy();
  });
});
