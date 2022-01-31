import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  formulario!: FormGroup
  result$!: Observable<Sagas | undefined>;
  hide = false;

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

  hider(){
    this.hide = !this.hide;
  }

  pesquisar(){
    const {query} = this.formulario.value;
    this.result$ = this.sagasService.pesquisar(query)
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


