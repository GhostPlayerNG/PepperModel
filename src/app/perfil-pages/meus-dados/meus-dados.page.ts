import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {

  constructor(public nav: NavController) { }
  
  voltar(){
    this.nav.navigateForward('home');
  }
  abrirInfoPessoal(){
    this.nav.navigateForward('info_pessoal');
  }
  abrirContato(){
    this.nav.navigateForward('info_contato');
  }
  abrirCredenciais(){
    this.nav.navigateForward('info_credenciais');
  }
  
  ngOnInit() {
  }

}
