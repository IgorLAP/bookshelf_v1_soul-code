import { trigger, state, style, transition, animate } from '@angular/animations';
import { MainCardService } from './../servicosInterface/main-card.service';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { Dashboard } from './../modelosInterface/dashboard';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  animations: [
    trigger('alternando', [
      state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed, void => collapsed',
       animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ])
  ]
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
          console.log(error);
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
