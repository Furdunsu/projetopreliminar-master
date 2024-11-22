import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'pag-login.page.html',
  styleUrls: ['pag-login.page.scss'],
})
export class PagLoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    }
  }
}
