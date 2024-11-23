import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pag-inicial',
    loadChildren: () => import('./pag-inicial/pag-inicial.module').then( m => m.PagInicialPageModule)
  },
  {
    path: 'pag-login',
    loadChildren: () => import('./pag-login/pag-login.module').then( m => m.PagLoginPageModule)
  },
  {
    path: 'pag-cadastro',
    loadChildren: () => import('./pag-cadastro/pag-cadastro.module').then( m => m.PagCadastroPageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'produto-detalhes/:id',  // Rota para detalhes de produto, com um parâmetro `id`
    loadChildren: () => import('./produto-detalhes/produto-detalhes.module').then( m => m.ProdutoDetalhesPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: '**',
    redirectTo: 'pag-inicial'  // Se a rota não for encontrada, redireciona para 'pag-inicial'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
