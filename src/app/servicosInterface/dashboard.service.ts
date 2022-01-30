import { Dashboard } from './../modelosInterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly uriAPI='../../assets/dashboard.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards(){
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiDashboard => apiDashboard.forEach(i=>{
        i.state = "expanded"
      }))
    )
  }

  pesquisar(query: string){
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      first(),
      delay(200),
      map(res => res.find(i => (i.titulo.toLowerCase()).startsWith(query.toLocaleLowerCase())))
    )
  }
}
