import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, tap} from 'rxjs';

import { Sagas } from '../modelosInterface/sagas';
import { SagasService } from '../servicosInterface/sagas.service';

@Component({
  selector: 'app-app-lista-sagas',
  templateUrl: './app-lista-sagas.component.html',
  styleUrls: ['./app-lista-sagas.component.scss']
})
export class AppListaSagasComponent implements OnInit {
  cardsSagas$: Observable<Sagas | undefined>;

  constructor(
    private sagasService: SagasService,
    @Inject(MAT_DIALOG_DATA) public conteudo:string

  ) {
    this.cardsSagas$ = this.sagasService.listagemLivrosSagas(conteudo)
    .pipe(
      tap(livrosSagas => console.log(livrosSagas))
    )

  }

  ngOnInit(): void {
  }

}
