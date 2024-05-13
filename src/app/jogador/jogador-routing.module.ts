import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogadorDetalheComponent } from './jogador-detalhe/jogador-detalhe.component';
import { JogadorListagemComponent } from './jogador-listagem/jogador-listagem.component';

const routes: Routes = [
  { path: 'detalhe', component: JogadorDetalheComponent},
  { path: 'listagem', component: JogadorListagemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogadorRoutingModule { }
