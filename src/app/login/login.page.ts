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
  }

  async login() {
    await this.GETUSER("usuario");
    if (this.email === 'adm' && this.senha === '123') {
      this.user = {
        nome: 'Administrador',
        email: 'adm@gmail.com',
        senha: '123',
        telefone: '(11) 40028922',
        cpf: '12345678910'
      }
      this.storage.setObject('usuario', this.user);
      this.route.navigateByUrl('home');
      this.route.dispose
      this.presentToast('bem vindo!', 'success', 700);
    } else if (this.email === this.user.email && this.senha === this.user.senha) {
      this.route.navigateByUrl('home');
      this.route.dispose
      this.presentToast('bem vindo!', 'success', 700);
    } else if (Boolean(this.email) === false || Boolean(this.senha) === false) {
      this.presentToast('Um ou mais campos vazios! Preencha corretamente', 'danger', 2000);
    } else {
      this.presentToast('Email e/ou senha invalido(s)!', 'danger', 2000);
    }
  }

  async GETUSER(key: string) {
    this.user = await this.storage.get(key);
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
