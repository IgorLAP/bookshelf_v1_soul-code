import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Tecnologia } from '../modelosInterface/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private readonly urlAPI = '../../assets/tecnologia.json';

  constructor(private listaTecnologia: HttpClient) { }

  listagemTecnologia() {
    return this.listaTecnologia.get<Tecnologia[]>(this.urlAPI)
      .pipe(
        first(),
        delay(400)
      )
  }
}
