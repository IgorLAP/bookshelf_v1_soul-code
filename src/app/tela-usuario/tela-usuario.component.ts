import { Component, OnInit } from '@angular/core';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { map, Observable, tap } from 'rxjs';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-tela-usuario',
  templateUrl: './tela-usuario.component.html',
  styleUrls: ['./tela-usuario.component.scss']
})
export class TelaUsuarioComponent implements OnInit {
  logo ='../../assets/imagens/ShelfBook.png';
  usuario$!: Observable<DocumentData | undefined>
  // profile!: any;
  constructor(
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) { }

  ngOnInit(): void {
    this.usuario$ = this.autenticacaoFirebaseService.user;
    // this.profile = this.autenticacaoFirebaseService.user
    // .pipe(
    //   tap(i => console.log(i))
    // )
  }

}
