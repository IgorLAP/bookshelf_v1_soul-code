import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Biblioteconomia } from '../modelosInterface/biblioteconomia';
import { BiblioteconomiaService } from '../servicosInterface/biblioteconomia.service';


@Component({
  selector: 'app-biblioteconomia',
  templateUrl: './biblioteconomia.component.html',
  styleUrls: ['./biblioteconomia.component.scss']
})
export class BiblioteconomiaComponent {
  cardsBiblioteconomia$: Observable<Biblioteconomia[]>;


  constructor(private biblioteconomiaService: BiblioteconomiaService) {
    this.cardsBiblioteconomia$ = biblioteconomiaService.listagemBiblioteconomia()
    .pipe(
      catchError(error =>{
        return of([])
      })
    )
  }

}
