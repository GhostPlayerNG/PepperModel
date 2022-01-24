import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos = [
    {
	  id: 1,
	  datahora: '19/01/2022 15:19',
	  status: 'confirmado',
	  avaliacao: 5,
	  total: 30.99,
	  taxa: 10.00,
	  itens: [
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
	  ]
	},
	{
	  id: 2,
	  datahora: '19/01/2022 15:19',
	  status: 'cancelado',
	  avaliacao: 3,
	  total: 35.99,
	  taxa: 10.00,
	  itens: [
		{
		  idprod: 2,
		  qtditem: 1,
		  nome: 'X-Bacon',
		  descricao: 'Pão, hamburguer, queijo, bacon e molho artesanal',
		  descricaobreve: 'Hamburguer na chapa com molho artesanal',
		  url: 'assets/produtos/x_bacon.jpg',
		  preco: 20.99,
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
	  ]
	}
  ];
  
  constructor(public nav: NavController, private route: Router) { }

  ngOnInit() {
  }
  
   exibirDetalhes(id: String){
    this.route.navigate(['pedido', id]);
    this.route.dispose
  }

}
