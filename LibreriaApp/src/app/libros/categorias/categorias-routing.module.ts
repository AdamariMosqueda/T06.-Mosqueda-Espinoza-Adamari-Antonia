import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPage
  },
  {
    path: 'nueva-categoria',
    loadChildren: () => import('./nueva-categoria/nueva-categoria.module').then( m => m.NuevaCategoriaPageModule)
  },
  {
    path: 'editar-categoria',
    loadChildren: () => import('./editar-categoria/editar-categoria.module').then( m => m.EditarCategoriaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
