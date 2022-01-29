import { TestBed } from '@angular/core/testing';

import { MainCardService } from './main-card.service';

describe('MainCardService', () => {
  let service: MainCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
