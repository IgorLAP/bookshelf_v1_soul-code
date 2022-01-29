import { TestBed } from '@angular/core/testing';

import { BiblioteconomiaService } from './biblioteconomia.service';

describe('BiblioteconomiaService', () => {
  let service: BiblioteconomiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiblioteconomiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
