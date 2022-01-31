import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Direito } from '../modelosInterface/direito';
@Injectable({
  providedIn: 'root'
})
export class DireitoService {
private readonly urlAPI = '../../assets/direito.json';

constructor(private http: HttpClient) { }

  listagem(){
    return this.http.get<Direito[]>(this.urlAPI)
    .pipe(
      first(),
      delay(200),
      tap(livros => console.log(livros))
    )
  }

}
