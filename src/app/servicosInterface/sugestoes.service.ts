import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, delay } from 'rxjs';

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
}
