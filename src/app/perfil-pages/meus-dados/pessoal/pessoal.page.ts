import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService, user } from 'src/app/service/storage.service';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.page.html',
  styleUrls: ['./pessoal.page.scss'],
})
export class PessoalPage implements OnInit {

  user: user;
  nome: string;
  cpf: string;

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.GETUSER();
  }

  async GETUSER() {
    this.user = await this.storage.get('usuario');
    if (this.user.nome !== "") {
      this.nome = this.user.nome;
    }
    else {
      this.nome = "vazio";
    }
    if (this.user.cpf !== "") {
      this.cpf = this.user.cpf;
    }
    else {
      this.cpf = "vazio";
    }
  }

  

}
