import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrePage } from './sobre.page';

const routes: Routes = [
  {
    path: '',
    component: SobrePage
  },
  {
    path: 'termos',
    loadChildren: () => import('./termos/termos.module').then( m => m.TermosPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./politica/politica.module').then( m => m.PoliticaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrePageRoutingModule {}
