import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import bootstrap from '../../main.server';
import { FormsModule } from '@angular/forms';
import { montadoraComponent } from './montadora/montadora.component';

@NgModule({
  declarations: [CarrosListagemComponent, montadoraComponent],
  imports: [
    CommonModule,
    FormsModule,
    CarrosRoutingModule,
    HttpClientModule
],
providers: [],
bootstrap: []
})
export class CarrosModule { }
