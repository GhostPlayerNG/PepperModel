import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StorageService, user } from '../service/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  user: user;
  nome: string;
  email: string;
  senha: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  dt_nascimento: string;
  cpf: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  nr_celular: string;

  constructor(public toastController: ToastController, private route: Router, private storage: StorageService) { }

  cadastrar() {

    if (Boolean(this.nome) === false || Boolean(this.email) === false || Boolean(this.senha) === false
      || Boolean(this.dt_nascimento) === false || Boolean(this.cpf) === false
      || Boolean(this.nr_celular) === false) {
      this.presentToast('Um ou mais campos vazios! Preencha corretamente', 'danger', 2000);
    } else {
      this.user = {
        nome: this.nome,
        email: this.email,
        senha: this.senha.toString(),
        telefone: this.nr_celular.toString(),
        cpf: this.cpf
      };
      this.storage.setObject('usuario',this.user);
      this.route.navigateByUrl('login');
      this.presentToast('Cadastro realizado com sucesso! Faça login com sua nova conta!', 'success', 2500);
    }
  }

  async presentToast(texto: string, cor: string, duration: number) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
