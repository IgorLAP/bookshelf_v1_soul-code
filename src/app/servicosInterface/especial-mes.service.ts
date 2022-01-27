import { first, tap } from 'rxjs';
import { EspecialMes } from './../modelosInterface/especialMes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialMesService {

  private readonly uriAPI='../../assets/especialMes.json';

  constructor(private cardsReportagens: HttpClient) {}

  listagemReportagens() {
    return this.cardsReportagens.get<EspecialMes[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiReportagens => console.log(apiReportagens))
    )
  }
}
