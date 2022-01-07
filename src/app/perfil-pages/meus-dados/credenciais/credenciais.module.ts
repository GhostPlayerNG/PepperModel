import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredenciaisPageRoutingModule } from './credenciais-routing.module';

import { CredenciaisPage } from './credenciais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredenciaisPageRoutingModule
  ],
  declarations: [CredenciaisPage]
})
export class CredenciaisPageModule {}
