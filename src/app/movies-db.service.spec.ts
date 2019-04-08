import { TestBed, inject } from '@angular/core/testing';

import { MoviesDbService } from './movies-db.service';

describe('MoviesDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesDbService]
    });
  });

  it('should be created', inject([MoviesDbService], (service: MoviesDbService) => {
    expect(service).toBeTruthy();
  }));
});
