import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of } from 'rxjs';

import { Empreendedorismo } from '../modelosInterface/empreendedorismo';
import { EmpreendedorismoService } from '../servicosInterface/empreendedorismo.service';

@Component({
  selector: 'app-empreendedorismo',
  templateUrl: './empreendedorismo.component.html',
  styleUrls: ['./empreendedorismo.component.scss']
})
export class EmpreendedorismoComponent implements OnInit {

  displayedColumns = ['img', 'titulo', 'autor', 'categoria', 'publicacao', 'isbn'];
  listaEmpreendedorismo$!: Observable<Empreendedorismo[]>;

  constructor(
    private listaEmpreendedorismoService: EmpreendedorismoService,
    private toast: HotToastService,
  ) { }

  ngOnInit(): void {
    this.listaEmpreendedorismo$ = this.listaEmpreendedorismoService.listagemEmpreendedorismo()
    .pipe(catchError(error => {
      this.toast.error(`Um erro ocorreu: BS# ${error}`)
      return of([])
    }))

  }

}
