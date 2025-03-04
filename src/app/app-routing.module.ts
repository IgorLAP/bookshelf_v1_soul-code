import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AjudaComponent } from './ajuda/ajuda.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { ArtesComponent } from './artes/artes.component';
import { BiblioteconomiaComponent } from './biblioteconomia/biblioteconomia.component';
import { DireitoComponent } from './direito/direito.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { FeedComponent } from './feed/feed.component';
import { IsbnComponent } from './isbn/isbn.component';
import { MaisVendidosComponent } from './mais-vendidos/mais-vendidos.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { RotasDesconhecidasComponent } from './rotas-desconhecidas/rotas-desconhecidas.component';
import { SagasComponent } from './sagas/sagas.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { TeatroComponent } from './teatro/teatro.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { VestibularComponent } from './vestibular/vestibular.component';


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
    path: 'tela-usuario', component: TelaUsuarioComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'criticas',
    loadChildren: () => import('./criticas/criticas.module').then(c => c.CriticasModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'especial-mes', component: EspecialMesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'biblioteconomia', component: BiblioteconomiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'sagas', component: SagasComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'tecnologia', component: TecnologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'vestibular', component: VestibularComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'isbn', component: IsbnComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'sugestoes', component: SugestoesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'mais-vendidos', component: MaisVendidosComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'teatro', component: TeatroComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'ajuda', component: AjudaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'direito', component: DireitoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'artes', component: ArtesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'empreendedorismo', component: EmpreendedorismoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'psicologia', component: PsicologiaComponent,
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
