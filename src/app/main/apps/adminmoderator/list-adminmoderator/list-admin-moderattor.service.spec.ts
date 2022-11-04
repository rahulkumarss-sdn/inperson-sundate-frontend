import { TestBed } from '@angular/core/testing';

import { ListAdminModerattorService } from './list-admin-moderattor.service';

describe('ListAdminModerattorService', () => {
  let service: ListAdminModerattorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAdminModerattorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
