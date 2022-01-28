import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoFirebaseService {

  usuarioLogado$ = authState(this.usuarioFb);
  auth = getAuth();

  constructor(
    private usuarioFb: Auth
    ) { }

    loginUsuario(usuarioEmail: string, usuarioSenha: string){
      return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha));
    }

    sairLogin(){
      return from(this.usuarioFb.signOut());
    }

    cadastrarUsuario(nome: string, email: string, senha: string){
      return from(createUserWithEmailAndPassword(this.usuarioFb, email, senha)).pipe(
        switchMap(({user}) => updateProfile(user, {displayName: nome}))
      )
    }

    loginGoogle(){
      const provider = new GoogleAuthProvider();
      return from(signInWithPopup(this.auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential!.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        }))
    }

    recuperarSenha(emailAddress: string){
      return from(sendPasswordResetEmail(this.usuarioFb, emailAddress))
    }

    errorMessages(error: string){
      switch (error) {
        case 'auth/invalid-email':
          return 'Email inválido'
          break;
        case 'auth/weak-password':
          return 'Senha deve conter no mínimo 6 caracteres'
          break;
        case 'auth/email-already-in-use':
          return 'Email já registrado em nosso sistema'
          break;
        default:
          return 'Ocorreu um erro'
          break;
      }
    }
}
