import { TestBed } from '@angular/core/testing';

import { QuestionnaireDetailsService } from './questionnaire-details.service';

describe('QuestionnaireDetailsService', () => {
  let service: QuestionnaireDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
