import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: any[] = [];  // Array para armazenar os produtos do carrinho

  constructor() {
    // Verifica se já existe um carrinho armazenado no localStorage e carrega os itens
    const carrinhoArmazenado = localStorage.getItem('carrinho');
    if (carrinhoArmazenado) {
      this.carrinho = JSON.parse(carrinhoArmazenado);
    }
  }

  // Adiciona um item ao carrinho
  adicionarAoCarrinho(produto: any) {
    this.carrinho.push(produto);
    this.salvarCarrinho();
  }

  // Remove um item do carrinho
  removerDoCarrinho(produtoId: string) {
    this.carrinho = this.carrinho.filter(item => item.id !== produtoId);
    this.salvarCarrinho();
  }

  // Lista todos os itens do carrinho
  obterCarrinho() {
    return this.carrinho;
  }

  // Salva os itens do carrinho no localStorage
  salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  // Limpa o carrinho
  limparCarrinho() {
    this.carrinho = [];
    this.salvarCarrinho();
  }
}
