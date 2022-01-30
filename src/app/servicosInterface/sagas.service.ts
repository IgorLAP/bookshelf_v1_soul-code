import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Sagas } from '../modelosInterface/sagas';

@Injectable({
  providedIn: 'root'
})
export class SagasService {

  private readonly uriAPI='../../assets/sagas.json';

  constructor(private cardsSagas: HttpClient) { }

  listagemSagas() {
    return this.cardsSagas.get<Sagas[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiSagas => console.log(apiSagas))
    )
  }
}
