import { TestBed } from '@angular/core/testing';

import { EspecialMesService } from './especial-mes.service';

describe('EspecialMesService', () => {
  let service: EspecialMesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialMesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
