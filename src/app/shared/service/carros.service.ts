import { Carro } from './model/carros';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarrosSeletor } from './model/seletor/carros.seletor';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro'
  constructor(private httpClient: HttpClient) { }

  consultar(id: number): Observable<Carro> {
    return this.httpClient.get<Carro>(this.API + '/' +id);
  }
    ListarComSeletor(seletor: CarrosSeletor): Observable<Array<Carro>> {
      return this.httpClient.post<Array<Carro>>(this.API+ '/filtro', seletor);
      }
      listarTodas(): Observable<Array<Carro>> {
        return this.httpClient.get<Array<Carro>>(this.API + '/todas');
      }
  }

