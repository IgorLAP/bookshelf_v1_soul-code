import { Dashboard } from './../modelosInterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainCardService {

  private readonly uriAPI='../../assets/mainCard.json';

  constructor(private mainCard: HttpClient) { }

  mostrarCard() {
    return this.mainCard.get<Dashboard[]>(this.uriAPI)
    .pipe(
      first(),
      delay(500),
      tap(apiDashboard => apiDashboard.forEach(i=>{
        i.state = "expanded"
      }))
    )
  }
}
