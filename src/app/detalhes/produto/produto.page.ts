import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Pedidos, PedidosService } from 'src/app/service/pedidos.service';
import { Produtos } from 'src/app/service/produtos.service';
import { itenscarrinho, produtos, StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  qtde = 1;
  id: string;
  preco: string;
  total: number;
  strTotal: string;
  filtered: Object;

  produtos: Produtos[] = [
    {
      id: 1,
      nome: 'X-Salada',
      descricao: 'Pão, hamburguer, queijo, alface, tomate e molho artesanal',
      urlImg: 'assets/produtos/x_salada.jpg',
      preco: '15.99',
      categoria: 'burguer'
    },
    {
      id: 2,
      nome: 'X-Bacon',
      descricao: 'Pão, hamburguer, queijo, bacon e molho artesanal',
      urlImg: 'assets/produtos/x_bacon.jpg',
      preco: '20.99',
      categoria: 'burguer'
    },
    {
      id: 3,
      nome: 'X-Tudo',
      descricao: 'Pão, hamburguer, queijo, ovo, bacon, alface, tomate e molho artesanal',
      urlImg: 'assets/produtos/x_tudo.jpg',
      preco: '26.99',
      categoria: 'burguer'
    },
    {
      id: 4,
      nome: 'Mussarela',
      descricao: 'Massa tradicional, borda com catupiry, mussarela de bufalo, molho, oregano e azeitona',
      urlImg: 'assets/produtos/mussarela.jpg',
      preco: '23.00',
      categoria: 'pizza'
    },
    {
      id: 5,
      nome: 'Portuguesa',
      descricao: 'Massa tradicional, borda com catupiry, mussarela, presunto, ovo, champignon, molho, oregano e azeitona',
      urlImg: 'assets/produtos/portuguesa.jpg',
      preco: '33.00',
      categoria: 'pizza'
    },
    {
      id: 6,
      nome: 'Vegetariana',
      descricao: 'Massa tradicional, primentão, champignon, rúcula, molho, oregano e azeitona',
      urlImg: 'assets/produtos/vegetariana.jpg',
      preco: '33.00',
      categoria: 'pizza'
    },
    {
      id: 7,
      nome: 'Coca-Cola',
      descricao: 'Coca-Cola Lata 350ml',
      urlImg: 'assets/produtos/coca_cola.jpg',
      preco: '5.00',
      categoria: 'bebida'
    },
    {
      id: 8,
      nome: 'Guaraná Antártica',
      descricao: 'Guaraná Antártica Lata 350ml',
      urlImg: 'assets/produtos/guarana_antartica.jpg',
      preco: '5.00',
      categoria: 'bebida'
    },
    {
      id: 9,
      nome: 'Sprite',
      descricao: 'Sprite Lata 350ml',
      urlImg: 'assets/produtos/sprite.jpg',
      preco: '4.00',
      categoria: 'bebida'
    },
  ];
  prod: produtos;
  item: itenscarrinho;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() url: string;

  // eslint-disable-next-line max-len
  constructor(public nav: NavController, private route: Router, private aRoute: ActivatedRoute, public toastC: ToastController, private storage: StorageService) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    try {
      //filtra um produto da lista de produtos pelo id recebido e o guarda em um objeto
      this.filtered = this.produtos.filter((prod) => prod.id === Number.parseInt(this.id, 10));
      console.log(this.filtered);
      //this.nome = this.filtered.filter((prod) => prod.nome === 'nome')
      //console.log(this.filtered.hasOwnProperty(this.nome));
      //console.log(this.filtered.hasOwnProperty('nome'));
      var x = 0;
      while (x < this.produtos.length) {
        if (this.produtos[x].id === Number.parseInt(this.id)) {
          this.preco = this.produtos[x].preco;
          this.strTotal = (Number.parseFloat(this.produtos[x].preco) * this.qtde).toFixed(2);
          this.prod = new produtos;
          this.prod.id = Number.parseInt(this.id);
          this.prod.nome = this.produtos[x].nome;
          this.prod.categoria = this.produtos[x].categoria;
          this.prod.url = this.produtos[x].urlImg;
          this.prod.preco = Number.parseFloat(this.produtos[x].preco);
        }
        x = x + 1;
      }
    } catch (e) {
      console.log(e);
    }
  }

  voltarInicio() {
    this.route.navigateByUrl('home');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.route.dispose;
  }

  adiciona() {
    this.qtde++;
    this.total = Number.parseFloat(this.preco) * this.qtde;
    this.strTotal = this.total.toFixed(2);

  }
  subtrai() {
    if (this.qtde > 0) {
      this.qtde--;
      this.total = (Number.parseFloat(this.preco) * this.qtde);
      this.strTotal = this.total.toFixed(2);
    }
  }

  async addCarrinho() {
    await this.SETLISTA();
    this.route.navigateByUrl('home');
    this.route.dispose;
    this.presentToast('Produto adicionado ao carrinho com sucesso', 'success', 1300);
  }
  async SETLISTA() {
    const itenscarrinho = {
      id: Number.parseInt(this.id),
      qtditem: this.qtde.toString(),
      produto: this.prod
    };
    console.log(await this.storage.addData(itenscarrinho));
  }

  addCarrinhoPedido() {
    /*
  this.pedido = new Pedidos();

    this.pedido.qtde = this.qtde.toString();
    this.pedido.valorTotal = this.strTotal;
    this.pedido.status = false;

    this.pedido.produtos = this.produtos;

    this.pedServ.create(this.pedido).subscribe(pedido => {
      console.log(pedido);
    });

    this.route.navigateByUrl('home');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.route.dispose;

    this.presentToast('Produto adicionado ao carrinho com sucesso', 'success', 1300);
  */
  }

  async presentToast(texto: string, cor: string, duration: number) {
    const toast = await this.toastC.create({
      message: texto,
      color: cor,
      duration
    });
    toast.present();
  }

}
