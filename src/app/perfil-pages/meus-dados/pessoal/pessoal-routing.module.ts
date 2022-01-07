import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoalPage } from './pessoal.page';

const routes: Routes = [
  {
    path: '',
    component: PessoalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoalPageRoutingModule {}
