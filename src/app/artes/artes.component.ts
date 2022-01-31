import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of } from 'rxjs';

import { Artes } from '../modelosInterface/artes';
import { ArtesService } from '../servicosInterface/artes.service';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.scss']
})
export class ArtesComponent implements OnInit {

  displayedColumns = ['img', 'titulo', 'autor', 'categoria', 'publicacao', 'isbn'];
  listaArtes$!: Observable<Artes[]>;


  constructor(
    private listaArtesService: ArtesService,
    private toast: HotToastService,
  ) { }


  ngOnInit(): void {
    this.listaArtes$ = this.listaArtesService.listagemArtes()
    .pipe(catchError(error => {
      this.toast.error(`Um erro ocorreu: BS# ${error}`)
      return of([])
    }))
  }

}
