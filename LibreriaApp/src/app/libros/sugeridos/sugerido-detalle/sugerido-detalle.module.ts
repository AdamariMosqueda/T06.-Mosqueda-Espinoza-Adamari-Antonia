import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugeridoDetallePageRoutingModule } from './sugerido-detalle-routing.module';

import { SugeridoDetallePage } from './sugerido-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugeridoDetallePageRoutingModule
  ],
  declarations: [SugeridoDetallePage]
})
export class SugeridoDetallePageModule {}
