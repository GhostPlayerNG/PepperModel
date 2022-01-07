import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaAddPage } from './senha-add.page';

const routes: Routes = [
  {
    path: '',
    component: SenhaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhaAddPageRoutingModule {}
