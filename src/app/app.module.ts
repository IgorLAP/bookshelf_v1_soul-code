import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import { RecaptchaModule } from 'ng-recaptcha';

import { environment } from '../environments/environment';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { AppCompartilhadoModule } from './app-compartilhado/app-compartilhado.module';
import { AppMaterialModule } from './app-compartilhado/app-material/app-material.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { FeedComponent } from './feed/feed.component';
import { IsbnComponent } from './isbn/isbn.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { VestibularComponent } from './vestibular/vestibular.component';
import { RotasDesconhecidasComponent } from './rotas-desconhecidas/rotas-desconhecidas.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { MaisVendidosComponent } from './mais-vendidos/mais-vendidos.component';
import { BiblioteconomiaComponent } from './biblioteconomia/biblioteconomia.component';
import { AjudaComponent } from './ajuda/ajuda.component';


import { SagasComponent } from './sagas/sagas.component';
import { AppListaSagasComponent } from './app-lista-sagas/app-lista-sagas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    FeedComponent,
    AppLoginComponent,
    AppCadastroComponent,
    EspecialMesComponent,
    RecuperarSenhaComponent,
    VestibularComponent,
    RotasDesconhecidasComponent,
    IsbnComponent,
    SugestoesComponent,
    TelaUsuarioComponent,
    MaisVendidosComponent,
    BiblioteconomiaComponent,
    AjudaComponent,
    SagasComponent,
    AppListaSagasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    RecaptchaModule,
    MatStepperModule,
    AppCompartilhadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
