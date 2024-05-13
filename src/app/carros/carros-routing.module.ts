import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { montadoraComponent } from './montadora/montadora.component';


const routes: Routes = [
  {path: 'listagem', component: CarrosListagemComponent},
  {path: 'montadora', component: montadoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
