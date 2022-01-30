import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppListaSagasComponent } from '../app-lista-sagas/app-lista-sagas.component';

import { Sagas } from '../modelosInterface/sagas';
import { SagasService } from '../servicosInterface/sagas.service';

@Component({
  selector: 'app-sagas',
  templateUrl: './sagas.component.html',
  styleUrls: ['./sagas.component.scss']
})
export class SagasComponent {
  cardsSagas$: Observable<Sagas[]>;

  constructor(
    private sagasService: SagasService,
    private dialogo: MatDialog
    ) {
    this.cardsSagas$ = this.sagasService.listagemSagas()
    .pipe(
      catchError(error =>{
        return of([])
      })
    )
  }

  abrirDialogoListagemLivros(sagas: string){
    this.dialogo.open(AppListaSagasComponent,{
      data: sagas
    })
  }

}


