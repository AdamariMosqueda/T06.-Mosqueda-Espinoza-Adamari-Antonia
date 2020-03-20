import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroDetallePage } from './libro-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: LibroDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroDetallePageRoutingModule {}
