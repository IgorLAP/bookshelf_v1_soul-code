import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, delay, map, Observable } from 'rxjs';
import { Criticas } from '../criticas/modelos/criticas';

@Injectable({
  providedIn: 'root'
})
export class CriticasService {

  private readonly urlAPI = '../../assets/criticas.json';

  constructor(private http: HttpClient) { }

  listagem(){
    return this.http.get<Criticas[]>(this.urlAPI)
    .pipe(
      first(),
      delay(200)
    )
  }

  search(query: string){
    console.log(query)
    return this.http.get<Criticas[]>(this.urlAPI)
    .pipe(
      map(data => data.filter(i => i.titulo.toLowerCase().includes(query.toLowerCase())))
    )
  }

  critica(id: string): Observable<Criticas | undefined>{
    return this.http.get<Criticas[]>(this.urlAPI)
    .pipe(
      map((data) => data.find(i => i.id === id))
    )
  }
}
