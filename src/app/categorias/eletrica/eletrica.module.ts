import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EletricaPageRoutingModule } from './eletrica-routing.module';

import { EletricaPage } from './eletrica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EletricaPageRoutingModule
  ],
  declarations: [EletricaPage]
})
export class EletricaPageModule {}
