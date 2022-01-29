import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { FeedComponent } from './feed/feed.component';
import { IsbnComponent } from './isbn/isbn.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { RotasDesconhecidasComponent } from './rotas-desconhecidas/rotas-desconhecidas.component';


const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'recuperar',
    component: RecuperarSenhaComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'especial-mes', component: EspecialMesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'isbn', component: IsbnComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: '**',
    component: RotasDesconhecidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
