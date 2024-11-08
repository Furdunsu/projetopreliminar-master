import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  mercadoLivreService: any;
  constructor(private navCtrl: NavController) {}

  openProduct(item: any) {
    // Aqui você pode redirecionar para a URL do Mercado Livre ou abrir uma nova página do produto
    window.open(item.permalink, '_blank'); // Redireciona para a página do Mercado Livre
  }
  

  
  ngOnInit() {
  }
  searchQuery: string = '';
  items: any[] = [];
  
  searchItems() {
    if (this.searchQuery.trim()) {
      this.mercadoLivreService.searchItems(this.searchQuery).subscribe((response: { [x: string]: any[]; }) => {
        this.items = response['results'];
      });
    } else {
      this.items = []; // Limpa os itens quando a busca está vazia
    }
  }
  
}



