import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Produtos{
  public id?: string;
  public nome: string;
  public preco: string;
  public urlImg: string;
  public descricao: string;
  public descricaoBreve: string;
  public categoria: string;
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
