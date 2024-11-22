import { Injectable } from '@angular/core';
import {  AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
 providedIn: 'root'
})
export class AutenticacaoService {
 constructor(public ngFireAuth: AngularFireAuth, private router: Router ) { }
 loginNoFireBase(email, password){
   return this.ngFireAuth.signInWithEmailAndPassword(email, password);
 }

 cadastroNoFirebase(email, password){
   return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
 }
}
