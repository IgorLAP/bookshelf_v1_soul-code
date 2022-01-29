import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of, tap } from 'rxjs';

import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { Generos } from './../modelos/generos';
import { GenerosService } from './../service/generos.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  livrosGeneros$: Observable <Generos[]>;
  visaoColunas=['_idGenero','nomeGenero','decimalGenero'];
  formulario!: FormGroup
  result$!: Observable<Generos | undefined>;
  hide = false;

  constructor(
    private generosService: GenerosService,
    public dialogo: MatDialog
    ) {
    this.livrosGeneros$ = generosService.listagemGeneros()
    .pipe(
      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    );
  }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }

  hider(){
    this.hide = !this.hide;
  }

  pesquisar(){
    const {query} = this.formulario.value;
    this.result$ = this.generosService.pesquisar(query)
    if(this.hide){
      this.hider();
    }
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      query: new FormControl('')
    });
  }
}
