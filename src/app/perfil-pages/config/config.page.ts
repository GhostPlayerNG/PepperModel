import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(public nav: NavController) { }
  
  voltar(){
    this.nav.navigateForward('home');
  }
  
  abrirSobre(){
    this.nav.navigateForward('config_sobre');
  }
  abrirNotifica(){
    this.nav.navigateForward('config_notifica');
  }
  
  ngOnInit() {
  }

}
