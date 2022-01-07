import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'carrinho',
        loadChildren: () => import('../tabs/carrinho/carrinho.module').then(m => m.CarrinhoPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../tabs/pedidos/pedidos.module').then(m => m.PedidosPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../tabs/perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../tabs/inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
