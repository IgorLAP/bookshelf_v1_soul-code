import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {
  formularioLogin = this.recuperarBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email])
  });

  constructor(private dialog: MatDialog,
    private Auth: AutenticacaoFirebaseService,
    private recuperarBuilder: FormBuilder,
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
    if(this.dialog){
      this.dialog.closeAll();
    }
  }

  get email(){
    return this.formularioLogin.get('email');
  }

  enviarRecuperacao(){
    if(this.formularioLogin.valid){
      const {email} = this.formularioLogin.value;
      this.Auth.recuperarSenha(email)
      .subscribe({
        next: () => {
          this.toast.success('Email enviado')
        },
        error: (err) => {
          this.toast.error(err.code)
        }
      })
    }
  }

}
