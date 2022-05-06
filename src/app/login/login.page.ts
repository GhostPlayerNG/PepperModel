import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService, user } from '../service/storage.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;
  user: user;

  constructor(public nav: NavController, public toastController: ToastController, private route: Router, private service: UsuarioService, private storage: StorageService) { }

  ngOnInit() {
    this.email = ''
    this.senha = ''
    this.user = new user();
    this.storage.getObject('usuario').then((data: any) => {
      console.log(data);
      if (data) {
        this.user = data;
        console.log(this.user);
      }
      else{
        this.user.email = '';
        this.user.senha = '';
        this.user.nome = '';
        this.user.telefone = '';
        this.user.cpf = '';
      }
    });
  }

  login() {

    if (this.email === 'adm' && this.senha === '123') {
      //this.setaUser('adm');
      this.user.email = 'adm';
      this.user.senha = '123';
      this.user.nome = '';
      this.user.telefone = '';
      this.user.cpf = '';
      console.log(this.user);
      this.storage.setObject('usuario',this.user);
      this.route.navigateByUrl('home');
      this.route.dispose
      this.presentToast('bem vindo!', 'success', 700);
    } else if (Boolean(this.email) === false || Boolean(this.senha) === false) {
      this.presentToast('Um ou mais campos vazios! Preencha corretamente', 'danger', 2000);
    }
    else {
      this.presentToast('Email e/ou senha invalido(s)!', 'danger', 2000);
    }
  }

  async setaUser(id: string) {
    await this.storage.setUser("userID", id);
  }

  cadastrar() {
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
