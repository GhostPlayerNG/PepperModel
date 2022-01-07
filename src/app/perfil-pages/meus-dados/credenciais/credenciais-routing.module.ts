import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredenciaisPage } from './credenciais.page';

const routes: Routes = [
  {
    path: '',
    component: CredenciaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredenciaisPageRoutingModule {}
