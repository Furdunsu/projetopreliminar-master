import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importando o Firebase Authentication
import { Router } from '@angular/router';  // Para navegação após login

@Component({
  selector: 'app-login',
  templateUrl: './pag-login.page.html',
  styleUrls: ['./pag-login.page.scss'],
})
export class PagLoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,  // Injetando o serviço de autenticação do Firebase
    private router: Router  // Injetando o serviço de navegação
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Função para realizar o login
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;

      // Autenticação com Firebase
      this.afAuth.signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          console.log('Usuário logado:', userCredential.user);
          alert('Login realizado com sucesso!');
          
          // Redirecionando o usuário para a página inicial após o login
          this.router.navigate(['/produto']);  // Substitua '/home' pela rota desejada
        })
        .catch((error) => {
          console.error('Erro ao realizar login:', error.message);
          alert('Erro ao realizar login: ' + error.message);
        });
    }
  }
}
