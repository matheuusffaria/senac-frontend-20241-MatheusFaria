import { Routes } from '@angular/router';


export const routes: Routes = [
  //{ path: '', redirectTo: 'cartas', pathMatch: 'full'},
  {
    path: 'cartas',
    loadChildren:() => import('./cartas/cartas.module').then(m => m.CartasModule),
  },
    {
      path: 'jogador',
      loadChildren:() => import('./jogador/jogador.module').then(m => m.JogadorModule),
    },
    {
      path: 'carros',
      loadChildren:() => import('./carros/carros.module').then(m => m.CarrosModule),
    }

];

