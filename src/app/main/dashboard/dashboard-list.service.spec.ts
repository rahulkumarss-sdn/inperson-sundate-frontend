import { TestBed } from '@angular/core/testing';

import { DashboardListService } from './dashboard-list.service';

describe('DashboardListService', () => {
  let service: DashboardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
