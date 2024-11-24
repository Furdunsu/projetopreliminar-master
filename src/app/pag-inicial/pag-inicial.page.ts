import { Component } from '@angular/core';
import { MercadoLivreService } from '../service/mercadolivre.service';

@Component({
  selector: 'app-pag-inicial',
  templateUrl: 'pag-inicial.page.html',
  styleUrls: ['pag-inicial.page.scss'],
})
export class  PagInicialPage {
  searchQuery: string = '';
  categories: string[] = ['Eletrônicos', 'Roupas', 'Casa e Decoração', 'Livros', 'Brinquedos'];
  products: any[] = [
    { name: 'Celular Samsung', price: 1500, category: 'Eletrônicos', imageUrl: '../assets/samsung.webp' },
    { name: 'Camiseta Estampada', price: 50, category: 'Roupas', imageUrl: '../assets/camiseta.webp' },
    { name: 'Sofá de Couro', price: 2000, category: 'Casa e Decoração', imageUrl: '../assets/sofa.webp' },
    { name: 'Harry Potter', price: 40, category: 'Livros', imageUrl: '../assets/harry-potter.webp' },
    { name: 'Boneca Barbie', price: 100, category: 'Brinquedos', imageUrl: '../assets/barbie.webp' },
  ];
  filteredProducts: any[] = [...this.products];

  constructor(private mercadoLivreService: MercadoLivreService
  ) {}

  

  // Função de busca de produtos
  searchProducts() {
    if (this.searchQuery.trim()) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  // Filtrar produtos por categoria
  filterByCategory(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }

  // Visualizar um produto (poderia navegar para uma página de detalhes)
  viewProduct(product: any) {
    console.log('Produto selecionado:', product);
  }
}