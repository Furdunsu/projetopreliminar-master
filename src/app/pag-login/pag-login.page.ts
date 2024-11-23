import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'pag-login.page.html',
  styleUrls: ['pag-login.page.scss'],
})
export class PagLoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Criando o formulário com validações
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Método para submeter o formulário
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulário válido', this.loginForm.value);
      // Adicione a navegação para a página inicial
    } else {
      console.log('Formulário inválido');
      this.loginForm.markAllAsTouched();

       // Navegar para a página inicial após o login
       this.router.navigate(['/pagina-inicial']);  // Aqui você substitui pelo nome da sua página inicial
      }
    }
    
  }

