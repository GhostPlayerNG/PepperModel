import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  constructor(public nav: NavController) { }

  abrirTermos(){
    this.nav.navigateForward('termos');
  }
  abrirPolitica(){
    this.nav.navigateForward('politica');
  }

  ngOnInit() {
  }

}
