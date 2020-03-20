import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugeridoDetallePage } from './sugerido-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: SugeridoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugeridoDetallePageRoutingModule {}
