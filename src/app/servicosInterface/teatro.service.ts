import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Teatro } from './../modelosInterface/teatro';

@Injectable({
  providedIn: 'root'
})
export class TeatroService {

  private readonly uriAPI='../../assets/teatro.json';

  constructor(private livrosTeatro: HttpClient) {}

  listagemTeatro() {
    return this.livrosTeatro.get<Teatro[]>(this.uriAPI)
    .pipe(
      first(),
      delay(400)
    )
  }
}
