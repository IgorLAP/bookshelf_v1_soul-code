import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasDesconhecidasComponent } from './rotas-desconhecidas.component';

describe('RotasDesconhecidasComponent', () => {
  let component: RotasDesconhecidasComponent;
  let fixture: ComponentFixture<RotasDesconhecidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotasDesconhecidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasDesconhecidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
