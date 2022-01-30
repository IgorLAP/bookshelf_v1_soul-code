import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioteconomiaComponent } from './biblioteconomia.component';

describe('BiblioteconomiaComponent', () => {
  let component: BiblioteconomiaComponent;
  let fixture: ComponentFixture<BiblioteconomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiblioteconomiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblioteconomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
