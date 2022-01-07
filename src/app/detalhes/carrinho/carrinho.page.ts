import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Pedidos, PedidosService } from 'src/app/service/pedidos.service';
import { Produtos, ProdutosService } from 'src/app/service/produtos.service';
import { ProdutoPage } from '../produto/produto.page';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  pedido: Pedidos;
  id: string;
  produto: Produtos;
  nome: string;
  descricao: string;
  preco: string;
  qtd: string;
  qtdNumber: number;
  valorTotal: string;
  valorTotalNumber: number;


  @Input() url: string


  constructor(public nav: NavController, private route: Router, private activatedRoute: ActivatedRoute, private produtoService: ProdutosService, private pedidosService: PedidosService, public toastController: ToastController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }


  ngOnInit() {
    try {
      this.pedidosService.getPedido(this.id).subscribe(pedidoSub => {
        this.pedido = pedidoSub;
        this.produto = new Produtos
        this.nome = this.pedido.produtos.nome
        this.descricao = this.pedido.produtos.descricao
        this.preco = Number.parseFloat(this.pedido.produtos.preco).toFixed(2)
        this.qtd = this.pedido.qtde
        this.valorTotal = this.pedido.valorTotal
        this.produto.urlImg = this.pedido.produtos.urlImg

        console.log("URL")
        console.log(this.pedido.produtos.urlImg)
        console.log("PRODUTOS")
        console.log(this.pedido.produtos)


      })

    } catch (e) {
      console.log(e)
    }
  }

  voltarInicio() {
    this.nav.back();
    this.route.dispose
  }

  adiciona() {
    this.qtdNumber = Number.parseInt(this.qtd)
    this.qtdNumber++
    this.qtd = this.qtdNumber.toString()
    this.valorTotalNumber = Number.parseFloat(this.preco) * this.qtdNumber
    this.valorTotal = this.valorTotalNumber.toFixed(2)
  }

  subtrai() {
    if (this.qtdNumber > 0) {
      this.qtdNumber = Number.parseInt(this.qtd)
      this.qtdNumber--
      this.qtd = this.qtdNumber.toString()
      this.valorTotalNumber = Number.parseFloat(this.preco) * this.qtdNumber
      this.valorTotal = this.valorTotalNumber.toFixed(2)
    }
  }



}
