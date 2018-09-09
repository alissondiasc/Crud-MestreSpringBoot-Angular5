import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private api: ApiService) { }

  login(credenciais: any) {

    let request = this.api.post('login', credenciais, { responseType: 'text' });
    return request;
  }

  cadastrar(usuario) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let requisicao = this.api.post('usuarios', usuario, { headers });
    return requisicao;
  }
  deletar(Id: number) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let requisicao = this.api.delete('usuarios/' + Id, { headers });
    return requisicao;

  }

  findall() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let requisicao = this.api.get('usuarios', { headers });
    return requisicao;
  }
  findById(id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let requisicao = this.api.get(`usuarios/${id}`, { headers });
    return requisicao;
  }
  findPaginado(page = 0, size=5){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let requisicao = this.api.get(`usuarios/paginado?size=${size}&page=${page}`, { headers });
    return requisicao;
  }

  update(usuario) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let requisicao = this.api.put('usuarios/', usuario, { headers });
    return requisicao;
  }

}
