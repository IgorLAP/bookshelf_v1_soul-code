import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, catchError, of } from 'rxjs';
import { MaisvendidosService } from '../servicosInterface/maisvendidos.service';
import { MaisVendidos } from './modelos/maisVendidos';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.scss']
})
export class MaisVendidosComponent implements OnInit {

  displayedColumns = ['capa','titulo','autor','categoria', 'dataPublicacao', 'isbn'];
  maisVendidos$!: Observable<MaisVendidos[]>;
  maisVendidosMundo$!: Observable<MaisVendidos[]>;

  constructor(private maisVendidosService: MaisvendidosService, private toast: HotToastService) { }

  ngOnInit(): void {
    this.maisVendidos$ = this.maisVendidosService.listagemBrasil()
    .pipe(catchError(error => {
      this.toast.error(`Um erro ocorreu: BS# ${error}`)
      return of([])
    }))

    this.maisVendidosMundo$ = this.maisVendidosService.listagemMundo()
    .pipe(catchError(error => {
      this.toast.error(`Um erro ocorreu: BS# ${error}`)
      return of([])
    }))
  }

}
