import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, delay, map, Observable, tap } from 'rxjs';

import { Sugestoes } from './../sugestoes/modelos/sugestoes';

@Injectable({
  providedIn: 'root'
})
export class SugestoesService {
  private readonly urlAPI = '../../assets/sugestoes.json';

  constructor(private http: HttpClient) { }

  listagem(){
    return this.http.get<Sugestoes[]>(this.urlAPI)
    .pipe(
      first(),
      delay(200)
    )
  }

  search(query: string): Observable<Sugestoes[]>{
    const checker = {
      checkAutor:  (data: Sugestoes[]) => data.filter(i => i.autor.toLowerCase().includes(query.toLowerCase())),
      checkTitulo:  (data: Sugestoes[]) => data.filter(i => i.titulo.toLowerCase().includes(query.toLowerCase())),
      checkSinopse:  (data: Sugestoes[]) => data.filter(i => i.sinopse.toLowerCase().includes(query.toLowerCase())),
    }
    return this.http.get<Sugestoes[]>(this.urlAPI)
    .pipe(
      map((data) => {
        if(checker.checkAutor(data).length > 0){
          return checker.checkAutor(data)
        } else if(checker.checkTitulo(data).length > 0){
          return checker.checkTitulo(data)
        } else if(checker.checkSinopse(data).length > 0){
          return checker.checkSinopse(data)
        } else {
          return []
        }
      })
    )
  }
}
