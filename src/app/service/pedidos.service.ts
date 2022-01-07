import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './produtos.service';

export class Pedidos{
  public id?: string;
  public qtde: string;
  public status: boolean;
  public valorTotal: string;
  public produtos: Produtos;
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {


    //https://ivrum-api-json.herokuapp.com/produtos
    private url = 'https://ivrum-api-json.herokuapp.com/pedidos';

  constructor(private http: HttpClient) { }

  create(pedidos: Pedidos){
    return this.http.post(this.url, pedidos);
  }

  read():Observable<Pedidos[]>{
    return this.http.get<Pedidos[]>(this.url);
  }

  getPedido(id: String):Observable<Pedidos>{
    return this.http.get<Pedidos>(this.url+"/"+id);
  }

  createPedidos(variavel: object){
    return this.http.post(this.url, variavel);
  }

}
