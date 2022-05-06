import { Component, OnInit } from '@angular/core';
import { StorageService, user } from 'src/app/service/storage.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  user: user;
  email: string;
  telefone: string;

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.GETUSER();
  }

  async GETUSER() {
    this.user = await this.storage.get('usuario');
    if (this.user.email !== "") {
      this.email = this.user.email;
    }
    else {
      this.email = "vazio";
    }
    if (this.user.telefone !== "") {
      this.telefone = this.user.telefone;
    }
    else {
      this.telefone = "vazio";
    }
  }

}
