import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Dashboard } from './../modelosInterface/dashboard';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { MainCardService } from './../servicosInterface/main-card.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  cards$: Observable<Dashboard[]>;
  main$: Observable<Dashboard[]>
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
  formulario!: FormGroup
  result$!: Observable<Dashboard | undefined>;
  hide = false;

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

  hider(){
    this.hide = !this.hide;
  }

  pesquisar(){
    const {query} = this.formulario.value;
    this.result$ = this.dashboardService.pesquisar(query)
    if(this.hide){
      this.hider();
    }
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      query: new FormControl('')
    });
  }
}
