import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.page.html',
  styleUrls: ['./seguranca.page.scss'],
})
export class SegurancaPage implements OnInit {

  constructor(public nav: NavController) { }
  
  voltar(){
    this.nav.navigateForward('home');
  }
  abrirDispositivos(){
    this.nav.navigateForward('dispositivos')
  }
  
  abrirSenhaAdd(){
    this.nav.navigateForward('senha')
  }
  
  ngOnInit() {
  }

}
