import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasCriticasComponent } from './todas-criticas.component';

describe('TodasCriticasComponent', () => {
  let component: TodasCriticasComponent;
  let fixture: ComponentFixture<TodasCriticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodasCriticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasCriticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
