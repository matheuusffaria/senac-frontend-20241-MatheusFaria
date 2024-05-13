import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from './model/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private readonly API: "http://localhost:8080/senac-20241-backend-exemplos/rest/jogador"
  constructor(private httpClient: HttpClient) { }
  listarTodos(): Observable<Array<Jogador>> {
    return this.httpClient.get<Array<Jogador>>(this.API + '/todas');

  }
  consultar(id: number): Observable<Jogador> {
    return this.httpClient.get<Jogador>(this.API + '/' +id);
  }

}
