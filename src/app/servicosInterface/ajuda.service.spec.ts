/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AjudaService } from './ajuda.service';

describe('Service: Ajuda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjudaService]
    });
  });

  it('should ...', inject([AjudaService], (service: AjudaService) => {
    expect(service).toBeTruthy();
  }));
});
