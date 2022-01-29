import { MainCardService } from './../servicosInterface/main-card.service';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { Dashboard } from './../modelosInterface/dashboard';
import { Component } from '@angular/core';
import { Observable, catchError, of, delay } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  cards$: Observable<Dashboard[]>;
  main$: Observable<Dashboard[]>
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;

  constructor(
    private dashboardService: DashboardService,
    private mainCardService: MainCardService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private dialogo: MatDialog
    ) {
      this.main$ = mainCardService.mostrarCard()
      .pipe(
        catchError(error =>{
          this.abrirDialogoErro("Erro ao carregar as notícias: #BS -"+error.status)
          return of([])
        })
      )
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error =>{
          this.abrirDialogoErro("Erro ao carregar as notícias: #BS -"+error.status)
          return of([])
        })
      )
    }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }
}
