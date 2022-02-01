import 'firebase/compat/storage';

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
import { from, switchMap } from 'rxjs';


// firebase.initializeApp(environment.firebase)
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoFirebaseService {
  /* firebaseApp = getApp();
  storage = getStorage(this.firebaseApp, environment.firebase.storageBucket); */

  usuarioLogado$ = authState(this.usuarioFb);
  auth = getAuth();

  constructor(private usuarioFb: Auth) {}

  loginUsuario(usuarioEmail: string, usuarioSenha: string) {
    return from(
      signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha)
    );
  }

  sairLogin() {
    return from(this.usuarioFb.signOut());
  }

  cadastrarUsuario(nome: string, email: string, senha: string) {
    return from(
      createUserWithEmailAndPassword(this.usuarioFb, email, senha)
    ).pipe(switchMap(({ user }) => updateProfile(user, { displayName: nome })));
  }

  loginGoogle() {
    const provider = new GoogleAuthProvider();
    return from(
      signInWithPopup(this.auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential!.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        })
    );
  }

  recuperarSenha(emailAddress: string) {
    return from(sendPasswordResetEmail(this.usuarioFb, emailAddress));
  }

  async subirImagem(nome: string, imgBase64: any) {
    /*    if (!imgBase64) return;

    try {
      let res = await this.storageRef.child("user/" + nome).putString(imgBase64, 'data_url');

      console.log(res);
    } catch (err) {
      console.log(err);
    } */
  }

  errorMessages(error: string) {
    switch (error) {
      case 'auth/invalid-email':
        return 'BS#001 - Email inválido';
        break;
      case 'auth/weak-password':
        return 'BS#002 - Senha deve conter no mínimo 6 caracteres';
        break;
      case 'auth/email-already-in-use':
        return 'BS#003 - Email já registrado em nosso sistema';
        break;
      case 'auth/wrong-password':
        return 'BS#004 - Informações incorretas. Verifique novamente'
        break;
      case 'auth/user-not-found':
        return 'BS#005 - Usuário não cadastrado'
        break;
      default:
        return 'BS#006 - Ocorreu um erro';
        break;
    }
  }
}
