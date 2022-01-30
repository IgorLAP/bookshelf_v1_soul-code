import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListaSagasComponent } from './app-lista-sagas.component';

describe('AppListaSagasComponent', () => {
  let component: AppListaSagasComponent;
  let fixture: ComponentFixture<AppListaSagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListaSagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListaSagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
