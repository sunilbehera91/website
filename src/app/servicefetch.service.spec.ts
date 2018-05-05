import { TestBed, inject } from '@angular/core/testing';

import { ServicefetchService } from './servicefetch.service';

describe('ServicefetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicefetchService]
    });
  });

  it('should be created', inject([ServicefetchService], (service: ServicefetchService) => {
    expect(service).toBeTruthy();
  }));
});
