import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of } from 'rxjs';

import { Tecnologia } from './../modelosInterface/tecnologia';
import { TecnologiaService } from './../servicosInterface/tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  displayedColumns = ['img', 'titulo', 'autor', 'categoria', 'publicacao', 'isbn'];
  listaTecnologia$!: Observable<Tecnologia[]>;

  constructor(
    private listaTecnologiaService: TecnologiaService,
    private toast: HotToastService,
  ) { }


  ngOnInit(): void {
    this.listaTecnologia$ = this.listaTecnologiaService.listagemTecnologia()
    .pipe(catchError(error => {
      this.toast.error(`Um erro ocorreu: BS# ${error}`)
      return of([])
    }))
  }

}
