import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public nav: NavController) { }

  sair(){
    this.nav.navigateForward('login');
  }

  abrirMeusDados(){
	this.nav.navigateForward('meus_dados');
  }

  abrirAjuda(){
	this.nav.navigateForward('ajuda');
  }

  abrirNotifica(){
	  this.nav.navigateForward('notifica');
  }

  abrirConfig(){
	  this.nav.navigateForward('config');
  }

  abrirSeguranca(){
	  this.nav.navigateForward('seguranca');
  }

  ngOnInit() {
  }

}
