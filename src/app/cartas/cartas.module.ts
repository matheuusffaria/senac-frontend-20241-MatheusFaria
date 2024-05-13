import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { CartaDetalheComponent } from './carta-detalhe/carta-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import bootstrap from '../../main.server';

@NgModule({
  declarations: [
    CartaListagemComponent,
    CartaDetalheComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    HttpClientModule, // módulo de requisitos HTTP
    FormsModule // módulo de formulários
  ],
  providers: [],
  bootstrap: [CartaListagemComponent, CartaDetalheComponent]
})
export class CartasModule { }
