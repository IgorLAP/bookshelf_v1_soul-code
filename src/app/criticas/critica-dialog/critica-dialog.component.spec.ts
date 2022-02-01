import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticaDialogComponent } from './critica-dialog.component';

describe('CriticaDialogComponent', () => {
  let component: CriticaDialogComponent;
  let fixture: ComponentFixture<CriticaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
