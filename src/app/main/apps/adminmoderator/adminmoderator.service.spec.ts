import { TestBed } from '@angular/core/testing';

import { AdminmoderatorService } from './adminmoderator.service';

describe('AdminmoderatorService', () => {
  let service: AdminmoderatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminmoderatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
