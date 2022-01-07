import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigNotifiPageRoutingModule } from './config-notifi-routing.module';

import { ConfigNotifiPage } from './config-notifi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigNotifiPageRoutingModule
  ],
  declarations: [ConfigNotifiPage]
})
export class ConfigNotifiPageModule {}
