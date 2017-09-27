import { TestBed, inject } from '@angular/core/testing';

import { Cinema.ServiceService } from './cinema.service.service';

describe('Cinema.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cinema.ServiceService]
    });
  });

  it('should be created', inject([Cinema.ServiceService], (service: Cinema.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
