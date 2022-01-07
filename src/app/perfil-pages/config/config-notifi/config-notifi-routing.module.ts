import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigNotifiPage } from './config-notifi.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigNotifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigNotifiPageRoutingModule {}
