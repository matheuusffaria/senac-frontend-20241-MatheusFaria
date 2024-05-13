import { Component, OnInit } from '@angular/core';
import { Carta } from '../../shared/service/model/carta';
import { CartasService } from '../../shared/service/cartas.service';
import { CartaSeletor } from '../../shared/service/model/seletor/carta.seletor';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';


@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})


export class CartaListagemComponent implements OnInit{

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

  constructor(private cartaService: CartasService,
    private router: Router, //componente para roteamento entre telas
  private route: ActivatedRoute // para pegar os parametros da URL
)  {

  }

  ngOnInit(): void {
    this.consultarTodasCartas();
  }
  public limpar() {
    this.seletor = new CartaSeletor();
  }
  public pesquisar() {
    this.cartaService.ListarComSeletor(this.seletor).subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('erro ao pesquisar cartas', error)
      }
    )
  }

    private consultarTodasCartas() {
      this.cartaService.listarTodas().subscribe(
        resultado => {
          this.cartas = resultado;
        },
        erro => {
          // Retorno com erros da chamada HTTP

          //TODO evoluir para mostrar a mensagem
          // de erro ao usuário na tela
          console.error('Erro ao consultar cartas', erro);
        }
      );
    }

    excluir(cartaSelecionadada: Carta){
      Swal.fire({
        title: 'Deseja realmente excluir essa carta?',
        text: 'Essa ação não poderá ser desfeita!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText:'Sim, excluir!',
        cancelButtonText: 'Cancelar'
      }).then ((result) => {
        if (result.value) {
          this.cartaService.excluir(cartaSelecionadada.id).subscribe(
            resultado => {
            this.pesquisar();
        },
      erro => {
        Swal.fire('Erro!', 'Erro ao excluir carta: ' + erro.error.menssagem, 'error');
      }
      );
    }
    });
}

editar(idCartaSelecionada: number){
  this.router.navigate(['/cartas/detalhe/', idCartaSelecionada]);
}
}
