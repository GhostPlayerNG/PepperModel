import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public nav: NavController, public toastController: ToastController, private route: Router) { }

  ngOnInit() {
    this.email = ''
    this.senha = ''
  }

  login(){

    if(this.email === 'adm' && this.senha === '123'){
      this.route.navigateByUrl('home');
      this.route.dispose
      this.presentToast('bem vindo!', 'success', 700);
    }else if(Boolean(this.email) === false|| Boolean(this.senha) === false){
      this.presentToast('Um ou mais campos vazios! Preencha corretamente', 'danger', 2000);
    }
    else{
      this.presentToast('Email e/ou senha invalido(s)!', 'danger', 2000);
    }
  }

  cadastrar(){
    this.route.navigateByUrl('cadastro');
    this.presentToast('Cadastre seus dados', 'success', 1300);    
  }

  async presentToast(texto: string, cor: string, duration: number) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: duration
    });
    toast.present();
  }



}
