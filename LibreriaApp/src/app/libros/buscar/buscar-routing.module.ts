import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPage } from './buscar.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage
  },
  {
    path: 'libro-detalle',
    loadChildren: () => import('./libro-detalle/libro-detalle.module').then( m => m.LibroDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPageRoutingModule {}
