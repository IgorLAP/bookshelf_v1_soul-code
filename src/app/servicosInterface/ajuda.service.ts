import { delay, first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ajuda } from '../modelosInterface/ajuda';

@Injectable({
  providedIn: 'root'
})
export class AjudaService {

private readonly urlAPI = '../../assets/ajuda.json';
private readonly urlERR = '../../assets/erros.json';

constructor(private http: HttpClient) { }

  listagemAjuda(){
    return this.http.get<Ajuda[]>(this.urlAPI)
    .pipe(
      first(),
      delay(400),
      tap(apiAjuda => apiAjuda.forEach(i=>{
        i.state = "collapsed"
      }))
    )
  }

  listagemErros(){
    return this.http.get<Ajuda[]>(this.urlERR)
    .pipe(
      first(),
      delay(400),
      tap(apiErros => apiErros.forEach(i=>{
        i.state = "collapsed"
      }))
    )
  }
}
