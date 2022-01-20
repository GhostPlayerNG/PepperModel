import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos, PedidosService } from 'src/app/service/pedidos.service';
import { Produtos, ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})


export class CarrinhoPage implements OnInit {

  pedidos: Pedidos[];
  qtdNumber: number;
  valorTotalNumber: number;
  total: number;
  
  itenscarrinho = [
    {
	  idprod: 1,
	  qtditem: 1,
	  nome: 'X-Salada',
	  descricao: 'Pão, hamburguer, queijo, alface, tomate e molho artesanal',
	  descricaobreve: 'Hamburguer na chapa com molho artesanal',
	  url: 'assets/produtos/x_salada.jpg',
	  preco: 15.99,
	  categoria: 'burguer'
	},
	{
	  idprod: 7,
	  qtditem: 2,
	  nome: 'Coca-Cola',
	  descricao: 'Coca-Cola Lata 350ml',
	  descricaobreve: 'Coca-Cola Lata 350ml',
	  url: 'assets/produtos/coca_cola.jpg',
	  preco: 5.00,
	  categoria: 'bebida'
	}
  ];

  constructor(private pedidosService: PedidosService, private route: Router) {

  }

  ngOnInit() {
    try {
      this.pedidosService.read().subscribe(pedidoSub => {
        this.pedidos = pedidoSub;
      })

    } catch (e) {
      console.log(e)
    }
	try {
		this.total = (15.99*1)+(5.00*2)
		this.total = Number.parseFloat(this.total.toFixed(2))
	} catch (e) {
	  console.log(e)
	}
	
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
    this.qtdNumber = Number.parseInt(this.pedidos[i].qtde)
    this.qtdNumber++
    this.pedidos[i].qtde = this.qtdNumber.toString()
    this.valorTotalNumber = Number.parseFloat(this.pedidos[i].produtos.preco) * this.qtdNumber
    this.pedidos[i].valorTotal = this.valorTotalNumber.toFixed(2)
  }

  subtrai(i: number) {
    if (this.qtdNumber > 0) {
      this.qtdNumber = Number.parseInt(this.pedidos[i].qtde)
      this.qtdNumber--
      this.pedidos[i].qtde = this.qtdNumber.toString()
      this.valorTotalNumber = Number.parseFloat(this.pedidos[i].produtos.preco) * this.qtdNumber
      this.pedidos[i].valorTotal = this.valorTotalNumber.toFixed(2)
    }
  }



  concluirPedido() { }
}


