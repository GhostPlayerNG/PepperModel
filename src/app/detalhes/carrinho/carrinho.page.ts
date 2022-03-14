import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Pedidos, PedidosService } from 'src/app/service/pedidos.service';
import { ItensCarrinho, Produtos, ProdutosService } from 'src/app/service/produtos.service';
import { ProdutoPage } from '../produto/produto.page';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  id: string;
  qtdNumber: number;
  valorTotal: string;
  valorTotalNumber: number;

  @Input() url: string
  
  item: ItensCarrinho;
  
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
		produto:{
			id: 7,
			nome: 'Coca-Cola',
			descricao: 'Coca-Cola Lata 350ml',
			urlImg: 'assets/produtos/coca_cola.jpg',
			preco: '5.00',
			categoria: 'bebida'
		}
	}
  ];


  constructor(public nav: NavController, private route: Router, private activatedRoute: ActivatedRoute, private produtoService: ProdutosService, private pedidosService: PedidosService, public toastController: ToastController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }


  ngOnInit() {
    try {
	  var x =0;
	  while (x<this.itenscarrinho.length){
			if(this.itenscarrinho[x].id === Number.parseInt(this.id)){
				this.item = this.itenscarrinho[x];
				console.log(this.item)
				this.valorTotal = (Number.parseFloat(this.item.produto.preco) * Number.parseInt(this.item.qtditem)).toFixed(2);
			}
			x=x+1;
		}
    } catch (e) {
      console.log(e)
    }
  }

  voltarInicio() {
    this.nav.back();
    this.route.dispose
  }

  adiciona() {
    this.qtdNumber = Number.parseInt(this.item.qtditem)
    this.qtdNumber = this.qtdNumber + 1;
    this.item.qtditem = this.qtdNumber.toString()	
    this.valorTotalNumber = Number.parseFloat(this.item.produto.preco) * this.qtdNumber
    this.valorTotal = this.valorTotalNumber.toFixed(2)
  }

  subtrai() {
    if (this.qtdNumber > 1) {
      this.qtdNumber = Number.parseInt(this.item.qtditem)
      this.qtdNumber = this.qtdNumber - 1;
      this.item.qtditem = this.qtdNumber.toString()	
	  this.valorTotalNumber = Number.parseFloat(this.item.produto.preco) * this.qtdNumber
      this.valorTotal = this.valorTotalNumber.toFixed(2)
    }
  }

}
