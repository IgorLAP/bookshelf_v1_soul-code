import { tap } from 'rxjs';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-usuario',
  templateUrl: './tela-usuario.component.html',
  styleUrls: ['./tela-usuario.component.scss']
})
export class TelaUsuarioComponent implements OnInit {
  logo='../../assets/imagens/ShelfBook.png';
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$

  constructor(
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) { }

  ngOnInit(): void {
  }

}
