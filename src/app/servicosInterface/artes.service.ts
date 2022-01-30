import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Artes } from '../modelosInterface/artes';

@Injectable({
  providedIn: 'root'
})
export class ArtesService {

  private readonly urlAPI = '../../assets/artes.json';

  constructor(private listaArtes: HttpClient) { }

  listagemArtes() {
    return this.listaArtes.get<Artes[]>(this.urlAPI)
      .pipe(
        first(),
        delay(400)
      )
  }
}
