import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../app-compartilhado/app-material/app-material.module';
import { CriticaComponent } from './critica/critica.component';
import { CriticasRoutingModule } from './criticas-routing.module';
import { TodasCriticasComponent } from './todas-criticas/todas-criticas.component';


@NgModule({
  declarations: [
    TodasCriticasComponent,
    CriticaComponent
  ],
  imports: [
    CommonModule,
    CriticasRoutingModule,
    AppMaterialModule
  ]
})
export class CriticasModule { }
