import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibularComponent } from './vestibular.component';

describe('VestibularComponent', () => {
  let component: VestibularComponent;
  let fixture: ComponentFixture<VestibularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
