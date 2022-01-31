import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, delay } from 'rxjs';
import { Empreendedorismo } from '../modelosInterface/empreendedorismo';

@Injectable({
  providedIn: 'root'
})
export class EmpreendedorismoService {

  private readonly urlAPI = '../../assets/empreendedorismo.json';

  constructor(private listaEmpreendedorismo: HttpClient) { }

  listagemEmpreendedorismo() {
    return this.listaEmpreendedorismo.get<Empreendedorismo[]>(this.urlAPI)
      .pipe(
        first(),
        delay(400)
      )
  }
}
