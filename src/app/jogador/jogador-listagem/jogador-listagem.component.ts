import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../../shared/service/jogador.service';
import { Jogador } from '../../shared/service/model/jogador';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-jogador-listagem',
  templateUrl: './jogador-listagem.component.html',
  styleUrl: './jogador-listagem.component.scss'
})
export class JogadorListagemComponent implements OnInit{

  constructor (private jogadorService: JogadorService,
    private router: Router, //componente para roteamento entre telas
  private route: ActivatedRoute // para pegar os parametros da URL
  )
  { }
  public jogadores: Jogador[] = [];

  ngOnInit(): void {
    this.costultarTodosJogadores();
  }

  private costultarTodosJogadores(){
    this.jogadorService.listarTodos().subscribe(
      resultado =>{
        this.jogadores = resultado;
      },
      erro => {
        console.error('Erro ao consultar jogador', erro);
      }
    );
  }
      }




