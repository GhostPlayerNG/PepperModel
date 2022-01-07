import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.page.html',
  styleUrls: ['./notifica.page.scss'],
})
export class NotificaPage implements OnInit {

  constructor(public nav: NavController, private route: Router) { }

  voltar(){
    this.route.navigateByUrl('home');
    //this.nav.navigateForward('home');
  }

  ngOnInit() {
  }

}
