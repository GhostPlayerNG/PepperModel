import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario, UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuario: Usuario;

  nome: string;
  email: string;
  senha: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  dt_nascimento: string;
  cpf: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  nr_celular: string;



  constructor(private service: UsuarioService, public toastController: ToastController, private route: Router) { }

  cadastrar(){


    if(Boolean(this.nome) === false || Boolean(this.email) === false || Boolean(this.senha) === false
      || Boolean(this.dt_nascimento) === false || Boolean(this.cpf) === false
      || Boolean(this.nr_celular) === false){
        this.presentToast('Um ou mais campos vazios! Preencha corretamente', 'danger', 2000);
      }else{

        this.usuario = new Usuario();

        this.usuario.nome = this.nome;
        this.usuario.email = this.email;
        this.usuario.senha = this.senha;
        this.usuario.dt_nascimento = this.dt_nascimento;
        this.usuario.cpf = this.cpf;
        this.usuario.nr_celular = this.nr_celular;

        this.service.create(this.usuario).subscribe(response => {console.log(response);});
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
