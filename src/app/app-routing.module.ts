import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./tabs/carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./tabs/pedidos/pedidos.module').then(m => m.PedidosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./tabs/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./tabs/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'meus_dados',
    loadChildren: () => import('./perfil-pages/meus-dados/meus-dados.module').then(m => m.MeusDadosPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./perfil-pages/ajuda/ajuda.module').then(m => m.AjudaPageModule)
  },
  {
    path: 'notifica',
    loadChildren: () => import('./perfil-pages/notifica/notifica.module').then(m => m.NotificaPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./perfil-pages/config/config.module').then(m => m.ConfigPageModule)
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./perfil-pages/seguranca/seguranca.module').then(m => m.SegurancaPageModule)
  },
  {
    path: 'eletrica',
    loadChildren: () => import('./categorias/eletrica/eletrica.module').then(m => m.EletricaPageModule)
  },
  {
    path: 'produto/:id',
    loadChildren: () => import('./detalhes/produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'detalhesCarrinho/:id',
    loadChildren: () => import('./detalhes/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'info_pessoal',
    loadChildren: () => import('./perfil-pages/meus-dados/pessoal/pessoal.module').then(m => m.PessoalPageModule)
  },
  {
    path: 'info_contato',
    loadChildren: () => import('./perfil-pages/meus-dados/contato/contato.module').then(m => m.ContatoPageModule)
  },
  {
    path: 'info_credenciais',
    loadChildren: () => import('./perfil-pages/meus-dados/credenciais/credenciais.module').then(m => m.CredenciaisPageModule)
  },
  {
    path: 'config_sobre',
    loadChildren: () => import('./perfil-pages/config/sobre/sobre.module').then(m => m.SobrePageModule)
  },
  {
    path: 'config_notifica',
    loadChildren: () => import('./perfil-pages/config/config-notifi/config-notifi.module').then(m => m.ConfigNotifiPageModule)
  }
  ,
  {
    path: 'termos',
    loadChildren: () => import('./perfil-pages/config/sobre/termos/termos.module').then(m => m.TermosPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./perfil-pages/config/sobre/politica/politica.module').then( m => m.PoliticaPageModule)
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./perfil-pages/seguranca/dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'senha',
    loadChildren: () => import('./perfil-pages/seguranca/senha-add/senha-add.module').then( m => m.SenhaAddPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
