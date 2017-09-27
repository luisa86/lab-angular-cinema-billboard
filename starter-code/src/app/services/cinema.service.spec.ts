import { TestBed, inject } from '@angular/core/testing';

import { CinemaService } from './cinema.service';

describe('Cinema.Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaService]
    });
  });

  it('should be created', inject([CinemaService], (service: CinemaService) => {
    expect(service).toBeTruthy();
  }));
});
