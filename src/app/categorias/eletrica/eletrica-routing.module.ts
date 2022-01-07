import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EletricaPage } from './eletrica.page';

const routes: Routes = [
  {
    path: '',
    component: EletricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EletricaPageRoutingModule {}
