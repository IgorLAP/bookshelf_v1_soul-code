import 'firebase/compat/storage';

import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { authState, user } from 'rxfire/auth';
import { docData } from 'rxfire/firestore';
import { from, of, switchMap, tap } from 'rxjs';

import { User } from '../modelosInterface/user';


@Injectable({
  providedIn: 'root',
})
export class AutenticacaoFirebaseService {

  usuarioLogado$ = authState(this.usuarioFb);
  auth = getAuth();

  constructor(private usuarioFb: Auth, private db: Firestore) {}

  loginUsuario(usuarioEmail: string, usuarioSenha: string) {
    return from(
      signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha)
    );
  }

  sairLogin() {
    return from(this.usuarioFb.signOut());
  }

  cadastrarUsuario(nome: string, email: string, senha: string, payload: User) {

    return from(
      createUserWithEmailAndPassword(this.usuarioFb, email, senha)
    ).pipe(
      tap((creds)=>{
        payload.uid = creds.user.uid;
        const users = collection(this.db, 'users');
        const usersDoc = doc(users, payload.uid);
        setDoc(usersDoc, payload);
      }),
      // switchMap(({ user }) => updateProfile(user, { displayName: nome }))
    );
  }

  get user(){
    //user do @angular/fire, tipo do firebase, retorna um usuario ou null | Se retonar o user ele tá logado
    return user(this.auth).pipe(
      //switchMap quando quer enviar de um Observable para outro sem colidor/encadear a tipagem
      //Permite tratar o resultado de um Observable (valor emitido) e te obriga a retornar um novo Observable
      switchMap((user) => {
        //se há um User ele continua e chama o metodo privado abaixo passando o uid, se não retorna undefined
        if(user){
          return this.getUserData(user.uid);
        }
        return of(undefined)
      })
    )
  }

  private getUserData(uid: string){
    const users = collection(this.db, 'users');
    const userDoc = doc(users, uid);

    return docData(userDoc)
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
