import { Vestibular } from './../modelosInterface/vestibular';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { VestibularService } from '../servicosInterface/vestibular.service';

@Component({
  selector: 'app-vestibular',
  templateUrl: './vestibular.component.html',
  styleUrls: ['./vestibular.component.scss']
})
export class VestibularComponent implements OnInit {

  cardsVestibular$: Observable<Vestibular[]> | undefined;

  constructor(
    private vestibularService: VestibularService
  ) {
    this.cardsVestibular$ = vestibularService.listagemVestibular()
    .pipe(
      catchError(error => {
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }

}
