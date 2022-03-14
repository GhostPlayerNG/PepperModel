import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Produtos{
  public id?: number;
  public nome: string;
  public preco: string;
  public urlImg: string;
  public descricao: string;
  public categoria: string;
}

export class ItensCarrinho{
	public id: number;
	public qtditem: string;
	public produto: Produtos;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url = 'https://ivrum-api-json.herokuapp.com/produtos';

  constructor(private http: HttpClient) { }

  create(produtos: Produtos){
    return this.http.post(this.url, produtos);
  }

  read():Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.url);
  }

  getProduto(id: String):Observable<Produtos>{
    return this.http.get<Produtos>(this.url+"/"+id);
  }

}
