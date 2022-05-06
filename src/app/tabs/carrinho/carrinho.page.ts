import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos, PedidosService } from 'src/app/service/pedidos.service';
import { ItensCarrinho, Produtos, ProdutosService } from 'src/app/service/produtos.service';
import { itenscarrinho, StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})


export class CarrinhoPage implements OnInit {

  valorTotalNumber: number;
  total: string;
  itens: itenscarrinho[];
  /*
  itenscarrinho: ItensCarrinho[] = [
    {
      id: 1,
      qtditem: '1',
      produto: {
        id: 1,
        nome: 'X-Salada',
        descricao: 'Pão, hamburguer, queijo, alface, tomate e molho artesanal',
        urlImg: 'assets/produtos/x_salada.jpg',
        preco: '15.99',
        categoria: 'burguer'
      }
    },
    {
      id: 2,
      qtditem: '2',
      produto: {
        id: 7,
        nome: 'Coca-Cola',
        descricao: 'Coca-Cola Lata 350ml',
        urlImg: 'assets/produtos/coca_cola.jpg',
        preco: '5.00',
        categoria: 'bebida'
      }
    }
  ];
  */
  constructor(private pedidosService: PedidosService, private route: Router, private storage: StorageService) { }

  ngOnInit() {
    this.init();
  }
  async init() {
    await this.GETLISTA();
    try {
      var x = 0;
      this.total = '0';
      this.valorTotalNumber = 0;
      while (x < this.itens.length) {
        this.valorTotalNumber = this.valorTotalNumber + (this.itens[x].produto.preco * Number.parseInt(this.itens[x].qtditem));
        x = x + 1;
      }
      this.total = this.valorTotalNumber.toFixed(2);
    } catch (e) {
      console.log(e)
    }
  }

  async GETLISTA() {
    //await this.SETLISTA();
    this.itens = await this.storage.getData();
    console.log(await this.storage.getData());
  }

  doRefresh(event) {

    setTimeout(() => {
      this.ngOnInit()
      event.target.complete();
    }, 1000);

  }

  exibirDetalhes(id: String) {
    this.route.navigate(['detalhesCarrinho', id]);
    this.route.dispose
  }
  /*
  exibirDetalhes(id: String) {
  let caminho = 'detalhesCarrinho' + id
  this.navCtrl.push(caminho,{
  name: this.nome
 });
}
*/
  adiciona(i: number) {
    this.itens[i].qtditem = (Number.parseInt(this.itens[i].qtditem) + 1).toString();
    this.valorTotalNumber = this.valorTotalNumber + this.itens[i].produto.preco;
    this.total = this.valorTotalNumber.toFixed(2)
  }

  subtrai(i: number) {
    if (Number.parseInt(this.itens[i].qtditem) > 1) {
      this.itens[i].qtditem = (Number.parseInt(this.itens[i].qtditem) - 1).toString();
      this.valorTotalNumber = this.valorTotalNumber - this.itens[i].produto.preco;
      this.total = this.valorTotalNumber.toFixed(2)
    } else {
      this.storage.remove(i, 'itens');
      this.ngOnInit();
    }
  }
  concluirPedido() {
    //this.pedidos = this.itenscarrinho;
    console.log('Itens:');
    console.log(this.itens);

  }
}


