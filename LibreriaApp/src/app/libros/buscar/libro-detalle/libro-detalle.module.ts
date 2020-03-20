import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroDetallePageRoutingModule } from './libro-detalle-routing.module';

import { LibroDetallePage } from './libro-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroDetallePageRoutingModule
  ],
  declarations: [LibroDetallePage]
})
export class LibroDetallePageModule {}
