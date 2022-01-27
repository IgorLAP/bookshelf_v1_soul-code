import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialMesComponent } from './especial-mes.component';

describe('EspecialMesComponent', () => {
  let component: EspecialMesComponent;
  let fixture: ComponentFixture<EspecialMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
