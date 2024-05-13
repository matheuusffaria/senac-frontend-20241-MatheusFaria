import { Component, OnInit } from '@angular/core';
import { MontadoraService } from '../../shared/service/montadora.service';
import Swal from 'sweetalert2';
import { Montadora } from '../../shared/service/model/montadora';

@Component({
  selector: 'app-carros-montadoras',
  templateUrl: './montadora.component.html',
  styleUrl: './montadora.component.scss'
})
export class montadoraComponent implements OnInit{

    public montadora: Montadora = new Montadora()
    public montadoras: Montadora[] = []

    constructor(private montadoraService: MontadoraService) { }

    ngOnInit(): void {
      this.consultarTodasMontadoras()
    }

    public consultarEstoqueCarros(id: number){
      if(!id){
        Swal.fire('Selecione uma montadora', '', 'warning')
        return
      }

      this.montadoraService.consultarEstoqueCarros(id).subscribe(
        resultado => {
            Swal.fire('Estoque' ,'Carros em estoque: ' + resultado, 'info')
        },
        erro => {
          Swal.fire('Erro ao consultar carros no estoque', erro, 'error')
        }
      )
    }

    public consultarTodasMontadoras(){
      this.montadoraService.consultarTodas().subscribe(
        resultado => {
          this.montadoras = resultado
        },
        erro => {
          console.log('Erro ao consultar Montadoras' + erro)
        }
      )
    }
}
