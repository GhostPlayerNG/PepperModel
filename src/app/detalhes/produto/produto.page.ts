import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Pedidos, PedidosService } from 'src/app/service/pedidos.service';
import { Produtos, ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  qtde = 1;
  id: string;
  produto: Produtos;
  pedido: Pedidos;
  nome: string;
  descricao: string;
  preco: string;
  total: number;
  strTotal: string;

  obj: Object[] = []
  
  produtos = [
    {
	  id: 1,
      nome: 'X-Salada',
      descricao: 'Pão, hamburguer, queijo, alface, tomate e molho artesanal',
      descricaobreve: 'Hamburguer na chapa com molho artesanal',
      url: 'assets/produtos/x_salada.jpg',
      preco: 15.99,
	  categoria: 'burguer'
    },
    {
	  id: 2,
      nome: 'X-Bacon',
      descricao: 'Pão, hamburguer, queijo, bacon e molho artesanal',
      descricaobreve: 'Hamburguer na chapa com molho artesanal',
      url: 'assets/produtos/x_bacon.jpg',
      preco: 20.99,
	  categoria: 'burguer'
    },
    {
	  id: 3,
      nome: 'X-Tudo',
      descricao: 'Pão, hamburguer, queijo, ovo, bacon, alface, tomate e molho artesanal',
      descricaobreve: 'Hamburguer na chapa com molho artesanal',
      url: 'assets/produtos/x_tudo.jpg',
      preco: 26.99,
	  categoria: 'burguer'
    },
    {
	  id: 4,
      nome: 'Mussarela',
      descricao: 'Massa tradicional, borda com catupiry, mussarela de bufalo, molho, oregano e azeitona',
      descricaobreve: 'Mussarela de Bufalo',
      url: 'assets/produtos/mussarela.jpg',
      preco: 23.00,
	  categoria: 'pizza'
    },
    {
	  id: 5,
      nome: 'Portuguesa',
      descricao: 'Massa tradicional, borda com catupiry, mussarela, presunto, ovo, champignon, molho, oregano e azeitona',
      descricaobreve: 'Presunto, mussarela, ovo e champignon',
      url: 'assets/produtos/portuguesa.jpg',
      preco: 33.00,
	  categoria: 'pizza'
    },
    {
	  id: 6,
      nome: 'Vegetariana',
      descricao: 'Massa tradicional, primentão, champignon, rúcula, molho, oregano e azeitona',
      descricaobreve: 'Pimentão, champignon e rúcula',
      url: 'assets/produtos/vegetariana.jpg',
      preco: 33.00,
	  categoria: 'pizza'
    },
    {
	  id: 7,
      nome: 'Coca-Cola',
      descricao: 'Coca-Cola Lata 350ml',
      descricaobreve: 'Coca-Cola Lata 350ml',
      url: 'assets/produtos/coca_cola.jpg',
      preco: 5.00,
	  categoria: 'bebida'
    },
    {
	  id: 8,
      nome: 'Guaraná Antártica',
      descricao: 'Guaraná Antártica Lata 350ml',
      descricaobreve: 'Guaraná Antártica Lata 350ml',
      url: 'assets/produtos/guarana_antartica.jpg',
      preco: 5.00,
	  categoria: 'bebida'
    },
	{
	  id: 9,
      nome: 'Sprite',
      descricao: 'Sprite Lata 350ml',
      descricaobreve: 'Sprite Lata 350ml',
      url: 'assets/produtos/sprite.jpg',
      preco: 4.00,
	  categoria: 'bebida'
    },
  ];



  @Input() url: string

  constructor(public nav: NavController, private route: Router, private activatedRoute: ActivatedRoute, private produtoService: ProdutosService, private pedidosService: PedidosService, public toastController: ToastController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    /*
	try {
      this.produtoService.getProduto(this.id).subscribe(prod => {
        this.produto = prod;
        this.nome = this.produto.nome
        this.descricao = this.produto.descricao
        this.preco = this.produto.preco
        this.url = this.produto.urlImg

        this.total = (Number.parseFloat(this.preco))
        this.strTotal = this.total.toFixed(2)

        console.log(prod)
      })
    } catch (e) {
      console.log(e)
    }*/
  }

  voltarInicio() {
    this.route.navigateByUrl('home');
    this.route.dispose
  }

  adiciona() {
    this.qtde++
    this.total = Number.parseFloat(this.preco) * this.qtde
    this.strTotal = this.total.toFixed(2)

  }
  subtrai() {
    if (this.qtde > 0) {
      this.qtde--
      this.total = (Number.parseFloat(this.preco) * this.qtde)
      this.strTotal = this.total.toFixed(2)
    }
  }

  addCarrinho(){

    this.pedido = new Pedidos

    console.log("ID do produto: " + this.id)
    this.pedido.qtde = this.qtde.toString()
    this.pedido.valorTotal = this.strTotal
    this.pedido.status = false

    console.log('PEDIDOS: ')
    console.log(this.pedido)

    this.pedidosService.create(this.pedido).subscribe(pedido => {
      console.log(pedido)
    })
  }

  addCarrinhoPedido(){
    this.pedido = new Pedidos

    this.pedido.qtde = this.qtde.toString()
    this.pedido.valorTotal = this.strTotal
    this.pedido.status = false

    this.pedido.produtos = this.produto



    this.pedidosService.create(this.pedido).subscribe(pedido => {
      console.log(pedido)
    })

    this.route.navigateByUrl('home')
    this.route.dispose

    this.presentToast('Produto adicionado ao carrinho com sucesso', 'success', 1300);
  }

  async presentToast(texto: string, cor: string, duration: number) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: duration
    });
    toast.present();
  }

}
