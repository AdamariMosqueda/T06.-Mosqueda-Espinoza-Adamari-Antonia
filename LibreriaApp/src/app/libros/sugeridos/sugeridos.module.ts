import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugeridosPageRoutingModule } from './sugeridos-routing.module';

import { SugeridosPage } from './sugeridos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugeridosPageRoutingModule
  ],
  declarations: [SugeridosPage]
})
export class SugeridosPageModule {}
