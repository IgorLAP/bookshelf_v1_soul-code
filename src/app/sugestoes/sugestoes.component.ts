import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';

import { SugestoesService } from '../servicosInterface/sugestoes.service';
import { Sugestoes } from './modelos/sugestoes';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss']
})
export class SugestoesComponent implements OnInit {
  formulario!: FormGroup
  sugestoes$!: Observable<Sugestoes[]>;

  constructor(
    private sugestoesService: SugestoesService
    ) { }

  ngOnInit(): void {
    this.sugestoes$ = this.sugestoesService.listagem()
    .pipe(
      catchError(err=>{
        console.log(err)
        return of([])
      })
    )
    this.formulario = new FormGroup({
      query: new FormControl('')
    });
  }

  pesquisar(){

  }

}
