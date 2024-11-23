import { Component, OnInit } from '@angular/core';
import { MercadoLivreService } from '../service/mercadolivre.service';  // Importando o serviço
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  produtos: any[] = [];
  produtoDetalhes: any;
  userAvaliacoes: any;
  searchTerm: string = '';  // Variável para armazenar o termo de pesquisa

  constructor(private mercadoLivreService: MercadoLivreService, private router: Router) {}

  ngOnInit() {
    // Se você quiser listar produtos iniciais ao carregar a página, pode chamar um termo de busca padrão
    this.listarProdutos('');
  }

  // Listar produtos com base no termo de busca
  listarProdutos(termoBusca: string) {
    this.mercadoLivreService.listarProdutos(termoBusca).subscribe(
      (response) => {
        console.log('Produtos encontrados:', response.results);
        this.produtos = response.results;
      },
      (error) => {
        console.error('Erro ao listar produtos:', error);
      }
    );
  }

  // Obter detalhes de um produto
  obterDetalhesProduto(itemId: string) {
    // Navegar para a página de detalhes do produto
    this.router.navigate(['/produto-detalhes', itemId]);
  }

  // Consultar avaliações de um vendedor
  consultarAvaliacoes(userId: string) {
    this.mercadoLivreService.consultarAvaliacoesVendedor(userId).subscribe(
      (response) => {
        console.log('Avaliações do vendedor:', response);
        this.userAvaliacoes = response;
      },
      (error) => {
        console.error('Erro ao consultar avaliações:', error);
      }
    );
  }
}
