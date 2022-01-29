import { first, tap } from 'rxjs';
import { Vestibular } from './../modelosInterface/vestibular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VestibularService {

  private readonly urlAPI = '../../assets/vestibular.json';

  constructor(
    private cardsVestibular: HttpClient
  ) { }

  listagemVestibular(){
    return this.cardsVestibular.get<Vestibular[]>(this.urlAPI)
    .pipe(
      first(),
      tap(apiVestibular => console.log(apiVestibular))
    )
  }
}
