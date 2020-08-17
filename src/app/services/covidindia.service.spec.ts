import { TestBed } from '@angular/core/testing';

import { CovidindiaService } from './covidindia.service';

describe('CovidindiaService', () => {
  let service: CovidindiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidindiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
