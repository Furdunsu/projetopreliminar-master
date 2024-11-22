import { Component } from '@angular/core';
import { MercadoLivreService } from '../service/mercadolivre.service';

@Component({
  selector: 'app-home',
  templateUrl: 'pag-inicial.page.html',
  styleUrls: ['pag-inicial.page.scss'],
})
export class  PagInicialPage {
  products: any[] = [];
  searchTerm: string = '';

  constructor(private mercadoLivreService: MercadoLivreService) {}

  // Método para buscar produtos quando o usuário realizar a busca
  search() {
    this.mercadoLivreService.searchProducts(this.searchTerm).subscribe(response => {
      this.products = response.results;
      console.log(this.products);  // Ver os resultados no console
    });
  }
  
}
