import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriticaComponent } from './critica/critica.component';
import { TodasCriticasComponent } from './todas-criticas/todas-criticas.component';

const routes: Routes = [
  {
    path: '',
    component: TodasCriticasComponent
  },
  {
    path: ':id',
    component: CriticaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriticasRoutingModule { }
