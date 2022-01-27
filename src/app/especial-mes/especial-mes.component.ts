import { EspecialMesService } from './../servicosInterface/especial-mes.service';
import { EspecialMes } from './../modelosInterface/especialMes';
import { Observable, catchError, of } from 'rxjs';
import { Component } from '@angular/core';


@Component({
  selector: 'app-especial-mes',
  templateUrl: './especial-mes.component.html',
  styleUrls: ['./especial-mes.component.scss']
})
export class EspecialMesComponent {
  cardsReportagens$: Observable<EspecialMes[]>;

  constructor(
    private especialMesService: EspecialMesService
  ) {
    this.cardsReportagens$ = especialMesService.listagemReportagens()
    .pipe(
      catchError(error =>{
        return of([])
      })
    )
  }
}
