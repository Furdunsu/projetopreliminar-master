import { Component } from '@angular/core';
import { MercadoLivreService } from '../service/mercadolivre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {
  produto = {
    title: 'Produto de Exemplo',
    price: 100.00,
    category_id: 'MLB12345',  // Exemplo de categoria
    currency_id: 'BRL',        // Moeda
    available_quantity: 10,    // Quantidade disponível
    condition: 'new',          // Condição do produto
    description: 'Descrição do produto de exemplo'
  };

  constructor(private mercadoLivreService: MercadoLivreService, private router: Router) {}

  cadastrarProduto() {
    this.mercadoLivreService.cadastrarProduto(this.produto).subscribe(
      (response) => {
        console.log('Produto cadastrado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao cadastrar produto:', error);
      }
    );
  }
}
