import { TestBed } from '@angular/core/testing';

import { AllcountriesinfoService } from './allcountriesinfo.service';

describe('AllcountriesinfoService', () => {
  let service: AllcountriesinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcountriesinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
