import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Para usar a autenticação
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './pag-cadastro.page.html',
  styleUrls: ['./pag-cadastro.page.scss'],
})
export class PagCadastroPage implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth, // Injetando o serviço de autenticação
    private router: Router
  ) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]]
    }, { 
      validators: this.passwordMatchValidator 
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { mismatch: true };
  }

  // Função para enviar os dados para o Firebase Authentication
  onSubmit() {
    if (this.cadastroForm.valid) {
      const formData = this.cadastroForm.value;

      this.afAuth.createUserWithEmailAndPassword(formData.email, formData.senha)
        .then((userCredential) => {
          console.log('Usuário criado:', userCredential.user);
          alert('Cadastro realizado com sucesso!');
          this.cadastroForm.reset();
        })
        .catch((error) => {
          console.error('Erro ao criar usuário:', error.message);
          alert('Erro ao realizar cadastro: ' + error.message);
        });
    }
  }
}
