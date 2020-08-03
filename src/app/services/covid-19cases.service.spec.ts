import { TestBed } from '@angular/core/testing';

import { Covid19casesService } from './covid-19cases.service';

describe('Covid19casesService', () => {
  let service: Covid19casesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19casesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
