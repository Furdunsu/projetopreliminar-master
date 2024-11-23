import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadoLivreService } from '../service/mercadolivre.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.page.html',
  styleUrls: ['./produto-detalhes.page.scss'],
})
export class ProdutoDetalhesPage implements OnInit {
  produtoDetalhes: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mercadoLivreService: MercadoLivreService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    const produtoId = this.activatedRoute.snapshot.paramMap.get('id');
    if (produtoId) {
      this.mercadoLivreService.getDetalhesProduto(produtoId).subscribe(
        (response) => {
          this.produtoDetalhes = response;
        },
        (error) => {
          console.error('Erro ao obter detalhes do produto:', error);
        }
      );
    }
  }

  // Adiciona o produto ao carrinho
  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
