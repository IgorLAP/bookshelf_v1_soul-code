import { HotToastService } from '@ngneat/hot-toast';
import { TeatroService } from './../servicosInterface/teatro.service';
import { Observable, catchError, of } from 'rxjs';
import { Component } from '@angular/core';
import { Teatro } from '../modelosInterface/teatro';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.scss']
})
export class TeatroComponent {

  teatro$: Observable<Teatro[]>
  displayedColumns = ['capa','titulo','autor', 'dataPublicacao', 'isbn'];

  constructor(
    private teatroService: TeatroService,
    private toast: HotToastService
  ) {
    this.teatro$ = teatroService.listagemTeatro()
    .pipe(
      catchError(error =>{
        this.toast.error(`Um erro ocorreu: BS# ${error}`)
        return of([])
      })
    )
  }
}
