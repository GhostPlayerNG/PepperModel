import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.page.html',
  styleUrls: ['./pessoal.page.scss'],
})
export class PessoalPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  voltar(){
    this.nav.navigateForward('home');
  }

}
