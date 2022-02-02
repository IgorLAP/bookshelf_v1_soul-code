import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { getStorage } from 'firebase/storage';
import { catchError, of } from 'rxjs';

import { User } from '../modelosInterface/user';
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
  forthFormGroup!: FormGroup;
  storage = getStorage();
  imgLoad!: string;
  state: boolean = false
  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router
  ) {}

  @ViewChild('inputPhoto') inputPhoto!: ElementRef


  enviaCadastro() {
    if (
      !this.clientName ||
      !this.clientEmail ||
      !this.clienteSenha ||
      !this.clienteConfirmSenha
    ) {
      this.toast.error('BS#007 - Preencha todos os campos corretamente!');
      return;
    } else if (this.clienteSenha !== this.clienteConfirmSenha ) {
      this.toast.error('BS#008 - As senhas não conferem!');
      return;
    } else if (this.clienteSenha.length < 6){
      this.toast.error('BS#009 - A senha deve ter no minimo 6 caracteres!');
      return;
    } else if (this.clientEmail) {
      if (this.clientEmail.indexOf('@') === -1) {
        this.toast.error('BS#010 - Email inválido!');
        return
      }
    }

    if (
      !this.clientEmail.includes('gmail.com') &&
      !this.clientEmail.includes('hotmail.com') &&
      !this.clientEmail.includes('outlook.com') &&
      !this.clientEmail.includes('yahoo.com')
    ) {
      this.toast.error('BS#011 - Provedor não cadastrado!');
      return;
    }

    const user: User = {
      name: this.clientName,
      email: this.clientEmail,
      photo: '../../assets/imagens/profile.png'
    }

    if(this.inputPhoto.nativeElement.value !== '' && (this.inputPhoto.nativeElement.value.includes('.jpg') || this.inputPhoto.nativeElement.value.includes('.png'))){
      user.photo = this.inputPhoto.nativeElement.value;
    } else if(this.inputPhoto.nativeElement.value !== '' && !(this.inputPhoto.nativeElement.value.includes('.jpg') || this.inputPhoto.nativeElement.value.includes('.png'))){
      this.toast.error('BS#012 - Formato não suportado, tente outra imagem');
      return;
    }


    this.autenticacaoFirebaseService.cadastrarUsuario(this.clientName, this.clientEmail, this.clienteSenha, user)
    .pipe(
      catchError((error) => {
        return of([]);
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
    .subscribe(
      () => {
      this.clientName = '';
      this.clientEmail = '';
      this.clienteSenha = '';
      this.clienteConfirmSenha = '';
      this.imgLoad = '';
      this.inputPhoto.nativeElement.value = '';
      this.rotas.navigate(['/feed']);
    });
  }

  carregarImg(): void {
    if (this.inputPhoto.nativeElement.value.includes('.jpg') || this.inputPhoto.nativeElement.value.includes('.png')) {
      this.imgLoad = this.inputPhoto.nativeElement.value
      this.state = true
    } else {
      console.log('BS#012 - Formato não suportado, tente outra imagem')
    }
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
