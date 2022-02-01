import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../app-compartilhado/app-material/app-material.module';
import { CriticaComponent } from './critica/critica.component';
import { CriticasRoutingModule } from './criticas-routing.module';
import { TodasCriticasComponent } from './todas-criticas/todas-criticas.component';
import { CriticaDialogComponent } from './critica-dialog/critica-dialog.component';


@NgModule({
  declarations: [
    TodasCriticasComponent,
    CriticaComponent,
    CriticaDialogComponent
  ],
  imports: [
    CommonModule,
    CriticasRoutingModule,
    AppMaterialModule
  ]
})
export class CriticasModule { }
