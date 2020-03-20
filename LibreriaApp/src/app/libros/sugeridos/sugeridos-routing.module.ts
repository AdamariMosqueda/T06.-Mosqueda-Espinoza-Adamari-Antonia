import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugeridosPage } from './sugeridos.page';

const routes: Routes = [
  {
    path: '',
    component: SugeridosPage
  },
  {
    path: 'sugerido-detalle',
    loadChildren: () => import('./sugerido-detalle/sugerido-detalle.module').then( m => m.SugeridoDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugeridosPageRoutingModule {}
