import { Component, OnInit } from '@angular/core';
import { CarrosSeletor } from '../../shared/service/model/seletor/carros.seletor';
import { error } from 'console';
import Swal from 'sweetalert2';
import { Carro } from '../../shared/service/model/carros';
import { CarrosService } from '../../shared/service/carros.service';
import { Montadora } from '../../shared/service/model/montadora';
import { MontadoraService } from '../../shared/service/montadora.service';

@Component({
  selector: 'app-carros-listagem',
  templateUrl: './carros-listagem.component.html',
  styleUrl: './carros-listagem.component.scss'
})
export class CarrosListagemComponent implements OnInit{
  public carros: Carro[] = [];
  public montadoras: Montadora[] = [];
  public seletor: CarrosSeletor = new CarrosSeletor();
  constructor(private carrosService: CarrosService,
    private montadoraService: MontadoraService
  ) {}


  ngOnInit(): void {
    this.pesquisar();
  }

  public limpar() {
    this.seletor = new CarrosSeletor();
  }
  public pesquisar() {
    this.carrosService.ListarComSeletor(this.seletor).subscribe(
      resultado => {
        this.carros = resultado
        if(this.carros.length === 0){
          Swal.fire('Nenhum carro encontrado')
      }
    },
      erro => {
        Swal.fire('Erro ao pesquisar carros', erro.error.mensagem, 'error')
      }
    )
  }
}
