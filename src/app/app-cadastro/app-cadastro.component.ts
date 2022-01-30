import { catchError, of } from 'rxjs';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirma = control.get('confirmaSenha')?.value;

    if (senha && confirma && senha !== confirma) {
      return {
        senhaConfirmada: true,
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AppCadastroComponent implements OnInit {
  clientName!: string;
  clientEmail!: string;
  clienteSenha!: string;
  clienteConfirmSenha!: string;
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router,
  ) {}

  enviaCadastro() {
    if (
      !this.clientName ||
      !this.clientEmail ||
      !this.clienteSenha ||
      !this.clienteConfirmSenha
    ) {
      this.toast.error('Preencha todos os campos corretamente!');
      return;
    } else if (this.clienteSenha !== this.clienteConfirmSenha) {
      this.toast.error('As senhas não conferem!');
      return;
    }

    this.autenticacaoFirebaseService
      .cadastrarUsuario(this.clientName, this.clientEmail, this.clienteSenha)
      .pipe(
        catchError(error => {
          return of([])
        }),
        this.toast.observe({
          success: 'Cadatro executado, bem vindo ao BookShelf',
          loading: 'Enviando informações...',
          error: ({ message }) =>
            this.autenticacaoFirebaseService.errorMessages(
              message.split('(')[1].split(')')[0]
            ),
        })
      )
      .subscribe(() => {
        this.clientName = '';
        this.clientEmail = '';
        this.clienteSenha = '';
        this.clienteConfirmSenha = '';
        this.rotas.navigate(['/']);
      });
  }

  upload(e: any): void {
    let file = e.target.files[0];
    let read = new FileReader();
    read.readAsDataURL(file);

    read.onloadend = () => {
      console.log(read.result);
      console.log('Type=> ',file.type)
      this.autenticacaoFirebaseService.subirImagem(`${this.clientName}_${Date.now()}`, read.result);

    }
  }

  uploadImage() {
    console.log('upload');
  }
  ngOnInit() {
    this.firstFormGroup = this.loginBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.loginBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
