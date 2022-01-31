import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, tap, delay } from 'rxjs';

import { Sagas } from '../modelosInterface/sagas';

@Injectable({
  providedIn: 'root'
})
export class SagasService {

  private readonly uriAPI='../../assets/sagas.json';

  constructor(private cardsSagas: HttpClient,) { }

  listagemSagas() {
    return this.cardsSagas.get<Sagas[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiSagas => console.log(apiSagas))
    )
  }

  //Método para buscar os livros de uma saga específica
  listagemLivrosSagas(titulo: string) {
    return this.cardsSagas.get<Sagas[]>(this.uriAPI)
    .pipe(
      first(),
      map(livrosSagas => livrosSagas.find(livrosSagas => livrosSagas.titulo === titulo))
    )
  }

  //Método para pesquisar uma saga pelo título
  pesquisar(query: string){
    return this.cardsSagas.get<Sagas[]>(this.uriAPI)
    .pipe(
      first(),
      delay(200),
      map(res => res.find(i => (i.titulo.toLowerCase()).startsWith(query.toLocaleLowerCase())))
    )
  }
}
