import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaAddPageRoutingModule } from './senha-add-routing.module';

import { SenhaAddPage } from './senha-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhaAddPageRoutingModule
  ],
  declarations: [SenhaAddPage]
})
export class SenhaAddPageModule {}
