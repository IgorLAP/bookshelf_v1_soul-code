import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Direito } from '../modelosInterface/direito';
import { DireitoService } from '../servicosInterface/direito.service';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.scss']
})
export class DireitoComponent implements OnInit {

  livros$!:Observable<Direito[]>

  constructor( private direitoService: DireitoService) { }

  ngOnInit() {
    this.livros$ = this.direitoService.listagem().pipe(
      catchError(err=>{
        console.log(err)
        return of([])
      })
    )
  }
}
