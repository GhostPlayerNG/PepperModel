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


