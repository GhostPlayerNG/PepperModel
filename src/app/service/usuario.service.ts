import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Usuario{
  public nome: string;
  public email: string;
  public senha: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public dt_nascimento: string;
  public cpf: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public nr_celular: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://ivrumapp.herokuapp.com/URbIC4fp_01_5-N1eP0-4A';

  constructor(private http: HttpClient) { }

  create(usuario: Usuario){
    return this.http.post(this.url, usuario);
  }

}
