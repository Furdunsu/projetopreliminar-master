import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MercadoLivreService {
  private apiUrl = 'https://api.mercadolibre.com/';  // URL base da API do Mercado Livre

  constructor(private http: HttpClient) {}

  // 1. Listar produtos
  listarProdutos(termoBusca: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sites/MLB/search?q=${termoBusca}`);
  }

  // 2. Detalhes de um produto
  getDetalhesProduto(itemId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${itemId}`);
  }

  // 3. Cadastrar um produto (POST)
  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/items`, produto);
  }

  // 4. Consultar pedidos
  consultarPedidos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/orders/search`);
  }

  // 5. Consultar avaliações do vendedor
  consultarAvaliacoesVendedor(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}/reviews`);
  }

  // 6. Consultar categorias
  consultarCategorias(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sites/MLB/categories`);
  }

  // 7. Consultar transporte e frete
  consultarFrete(produtoId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/shipping_options/${produtoId}`);
  }
}
