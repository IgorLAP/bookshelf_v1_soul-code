import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Psicologia } from './../modelosInterface/psicologia';

@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {

  private readonly uriAPI='../../assets/psicologia.json';

  constructor(private livrosPsicologia: HttpClient) {}

  listagemPsicologia() {
    return this.livrosPsicologia.get<Psicologia[]>(this.uriAPI)
    .pipe(
      first(),
      delay(400)
    )
  }
}
