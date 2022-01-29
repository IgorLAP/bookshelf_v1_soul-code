import { TestBed } from '@angular/core/testing';

import { MaisvendidosService } from './maisvendidos.service';

describe('MaisvendidosService', () => {
  let service: MaisvendidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaisvendidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
