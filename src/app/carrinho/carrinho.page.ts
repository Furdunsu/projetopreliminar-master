import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';  // Importando o serviço de carrinho
import { Router } from '@angular/router';  // Para navegação

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  carrinho: any[] = [];  // Array para armazenar os itens do carrinho

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ngOnInit() {
    this.carregarCarrinho();  // Carrega os itens do carrinho ao iniciar a página
  }

  // Carrega os itens do carrinho
  carregarCarrinho() {
    this.carrinho = this.carrinhoService.obterCarrinho();
  }

  // Remove um item do carrinho
  removerItem(produtoId: string) {
    this.carrinhoService.removerDoCarrinho(produtoId);
    this.carregarCarrinho();  // Atualiza a lista de itens no carrinho
  }

  // Função para finalizar a compra
  finalizarCompra() {
    alert('Compra finalizada!');
    this.carrinhoService.limparCarrinho();  // Limpa o carrinho após a compra
    this.router.navigate(['/home']);  // Redireciona para a página inicial após a compra
  }
}
