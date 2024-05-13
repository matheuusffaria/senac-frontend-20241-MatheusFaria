import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JogadorDetalheComponent } from './jogador-detalhe/jogador-detalhe.component';
import { JogadorListagemComponent } from './jogador-listagem/jogador-listagem.component';
import { JogadorRoutingModule } from './jogador-routing.module';


@NgModule({
  declarations: [
    JogadorDetalheComponent,
    JogadorListagemComponent
  ],
  imports: [
    CommonModule,
    JogadorRoutingModule,
    HttpClientModule, // módulo de requisitos HTTP
    FormsModule // módulo de formulários
  ],
  providers: [],
  bootstrap: [JogadorDetalheComponent, JogadorListagemComponent]
})
export class JogadorModule { }
