import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, delay, tap } from 'rxjs';
import { MaisVendidos } from '../mais-vendidos/modelos/maisVendidos';

@Injectable({
  providedIn: 'root'
})
export class MaisvendidosService {

  private readonly urlAPI = '../../assets/maisvendidosbrasil.json';
  private readonly urlAPIMundo = '../../assets/maisVendidosMundo.json'

  constructor(private http: HttpClient) { }

  listagemBrasil(){
    return this.http.get<MaisVendidos[]>(this.urlAPI)
    .pipe(
      first(),
      delay(400)
    )
  }

  listagemMundo(){
    return this.http.get<MaisVendidos[]>(this.urlAPIMundo)
    .pipe(
      first(),
      delay(400),
      tap(pretty => console.log(pretty))
    )
  }
}
