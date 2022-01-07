import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusDadosPage } from './meus-dados.page';

const routes: Routes = [
  {
    path: '',
    component: MeusDadosPage
  },  {
    path: 'pessoal',
    loadChildren: () => import('./pessoal/pessoal.module').then( m => m.PessoalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusDadosPageRoutingModule {}
