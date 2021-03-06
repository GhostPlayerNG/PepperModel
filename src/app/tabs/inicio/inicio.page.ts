import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Produtos, ProdutosService } from 'src/app/service/produtos.service';
import { produtos, StorageService, user } from 'src/app/service/storage.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  /*
    produtos: Produtos[];
    //procura: string;
    produtosFiltrado: Produtos[];*/

  public selectTab: string = '0';

  produtos = [
    {
      id: 1,
      nome: 'X-Salada',
      descricao: 'Pão, hamburguer, queijo, alface, tomate e molho artesanal',
      url: 'assets/produtos/x_salada.jpg',
      preco: 15.99,
      categoria: 'burguer'
    },
    {
      id: 2,
      nome: 'X-Bacon',
      descricao: 'Pão, hamburguer, queijo, bacon e molho artesanal',
      url: 'assets/produtos/x_bacon.jpg',
      preco: 20.99,
      categoria: 'burguer'
    },
    {
      id: 3,
      nome: 'X-Tudo',
      descricao: 'Pão, hamburguer, queijo, ovo, bacon, alface, tomate e molho artesanal',
      url: 'assets/produtos/x_tudo.jpg',
      preco: 26.99,
      categoria: 'burguer'
    },
    {
      id: 4,
      nome: 'Mussarela',
      descricao: 'Massa tradicional, borda com catupiry, mussarela de bufalo, molho, oregano e azeitona',
      url: 'assets/produtos/mussarela.jpg',
      preco: 23.00,
      categoria: 'pizza'
    },
    {
      id: 5,
      nome: 'Portuguesa',
      descricao: 'Massa tradicional, borda com catupiry, mussarela, presunto, ovo, champignon, molho, oregano e azeitona',
      url: 'assets/produtos/portuguesa.jpg',
      preco: 33.00,
      categoria: 'pizza'
    },
    {
      id: 6,
      nome: 'Vegetariana',
      descricao: 'Massa tradicional, primentão, champignon, rúcula, molho, oregano e azeitona',
      url: 'assets/produtos/vegetariana.jpg',
      preco: 33.00,
      categoria: 'pizza'
    },
    {
      id: 7,
      nome: 'Coca-Cola',
      descricao: 'Coca-Cola Lata 350ml',
      url: 'assets/produtos/coca_cola.jpg',
      preco: 5.00,
      categoria: 'bebida'
    },
    {
      id: 8,
      nome: 'Guaraná Antártica',
      descricao: 'Guaraná Antártica Lata 350ml',
      url: 'assets/produtos/guarana_antartica.jpg',
      preco: 5.00,
      categoria: 'bebida'
    },
    {
      id: 9,
      nome: 'Sprite',
      descricao: 'Sprite Lata 350ml',
      url: 'assets/produtos/sprite.jpg',
      preco: 4.00,
      categoria: 'bebida'
    },
  ];

  user: user;


  constructor(public nav: NavController, private service: ProdutosService, private route: Router, private storage: StorageService) { }

  ngOnInit() {

    this.GETLISTA();
  }
  doRefresh(event) {

    setTimeout(() => {
      this.ngOnInit()
      event.target.complete();
    }, 1000);

  }

  async GETLISTA() {
    //await this.SETLISTA();
    console.log(await this.storage.getData());
  }

  async SETLISTA() {
    const itenscarrinho = {
      id: 1,
      qtditem: '1',
      produto: this.produtos[1]
    };
    console.log(await this.storage.addData(itenscarrinho));
  }

  segmentChanged(event: any) {
    this.selectTab = event.target.value;
  }


  exibirDetalhes(id: String) {
    this.route.navigate(['produto', id]);
    this.route.dispose
  }

}
