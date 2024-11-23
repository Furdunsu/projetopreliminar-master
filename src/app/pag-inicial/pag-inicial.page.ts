import { Component } from '@angular/core';
import { MercadoLivreService } from '../service/mercadolivre.service';


@Component({
  selector: 'app-pag-inicial',
  templateUrl: 'pag-inicial.page.html',
  styleUrls: ['pag-inicial.page.scss'],
})
export class  PagInicialPage {
  products: any[] = [];
  searchTerm: string = '';

  constructor(private mercadoLivreService: MercadoLivreService) {}

  // Método para buscar produtos quando o usuário realizar a busca
  search() {
    // Corrigir para o nome correto do método
this.mercadoLivreService.listarProdutos(this.searchTerm).subscribe(response => {
  console.log(response);
});

      console.log(this.products);  // Ver os resultados no console
    };
  }
  
