import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-cadastro',
  templateUrl: './pag-cadastro.page.html',
  styleUrls: ['./pag-cadastro.page.scss'],
})
export class PagCadastroPage implements OnInit {
  

  constructor(private formBuilder: FormBuilder, public router: Router, public cadastroForm: FormGroup) {}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, this.validarCpf]],
      celular: ['', [Validators.required, this.validarCelular]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
    }, {
      validator: this.confirmarSenhas  // Validação para senhas iguais
    });
  }

  // Getters para acessar os campos de forma simplificada
  get email() {
    return this.cadastroForm.get('email');
  }

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get cpf() {
    return this.cadastroForm.get('cpf');
  }

  get celular() {
    return this.cadastroForm.get('celular');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  get confirmarSenha() {
    return this.cadastroForm.get('confirmarSenha');
  }

  // Função para submeter o formulário
  onSubmit() {
    if (this.cadastroForm.valid) {
      // Lógica para enviar dados ou navegar
      this.router.navigate(['/pag-login']);
    } else {
      // Se o formulário não for válido, exibe uma mensagem ou destaca erros
      console.log('Formulário inválido');
    }
  }

  // Validação personalizada para verificar se as senhas são iguais
  confirmarSenhas(formGroup: FormGroup) {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoCoincidem: true };
  }

  // Validação de CPF - Exemplo simples
  validarCpf(control: FormControl) {
    const cpf = control.value;
    // Validação simplificada de CPF (verifica se tem 11 caracteres)
    return cpf?.length === 11 ? null : { cpfInvalido: true };
  }

  // Validação de Celular - Exemplo simples
  validarCelular(control: FormControl) {
    const celular = control.value;
    // Validação simplificada de celular (verifica se tem 11 caracteres)
    return celular?.length === 11 ? null : { celularInvalido: true };
  }
}
