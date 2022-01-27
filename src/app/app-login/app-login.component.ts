import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { NavegacaoComponent } from '../navegacao/navegacao.component';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });
  nTry: number = 0
  hasUnitNumber=false;
  captcha!: string
  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo:string,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    ) {}

    get email(){
      return this.formularioLogin.get('email')
    }

    get senha(){
      return this.formularioLogin.get('senha')
    }
    loginFirebase(){
      if(!this.formularioLogin.valid){
        this.nTry ++
        this.captcha = ''
        return;
      }
      const {email, senha} = this.formularioLogin.value;
      this.autenticacaoFirebaseService.loginUsuario(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Login valido, obrigado',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira as informações'
        })
      ).subscribe(()=>{
        this.nTry =0
        this.rotas.navigate(['/cdd'])
        console.log(this.nTry)
      })
      setTimeout(() => {
        this.nTry ++
        this.captcha = ''
      }, 500);
    }

  abrirLoginGoogle(){
    this.autenticacaoFirebaseService.loginGoogle()
    .subscribe(()=>{
      this.rotas.navigate(['/feed'])
    })
  }

  resolveRecaptcha(response : string){
    this.captcha = response;
    this.nTry = 0;
    console.log('Resolve Recaptcha', response);
  }
}
