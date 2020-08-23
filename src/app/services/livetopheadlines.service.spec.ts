import { TestBed } from '@angular/core/testing';

import { LivetopheadlinesService } from './livetopheadlines.service';

describe('LivetopheadlinesService', () => {
  let service: LivetopheadlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivetopheadlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
