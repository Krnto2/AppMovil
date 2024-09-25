import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from "../../components/components.module";

import { GenerarPageRoutingModule } from './generar-routing.module';

import { GenerarPage } from './generar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GenerarPage]
})
export class GenerarPageModule {}
