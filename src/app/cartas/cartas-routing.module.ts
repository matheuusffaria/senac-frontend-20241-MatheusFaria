import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaDetalheComponent } from './carta-detalhe/carta-detalhe.component';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';

const routes: Routes = [
  { path: 'listagem', component: CartaListagemComponent},
  { path: 'detalhe', component: CartaDetalheComponent},
  { path: 'detalhe/:id', component: CartaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartasRoutingModule { }
