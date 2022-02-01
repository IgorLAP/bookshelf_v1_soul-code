import { HotToastService } from '@ngneat/hot-toast';
import { PsicologiaService } from './../servicosInterface/psicologia.service';
import { Observable, catchError, of } from 'rxjs';
import { Component } from '@angular/core';
import { Psicologia } from '../modelosInterface/psicologia';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss']
})
export class PsicologiaComponent {

  psicologia$: Observable<Psicologia[]>
  displayedColumns = ['capa','titulo','autor', 'dataPublicacao', 'isbn'];

  constructor(
    private psicologiaService: PsicologiaService,
    private toast: HotToastService
  ) {
    this.psicologia$ = psicologiaService.listagemPsicologia()
    .pipe(
      catchError(error =>{
        this.toast.error(`Um erro ocorreu: BS# ${error}`)
        return of([])
      })
    )
  }
}
