import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrasenaPageRoutingModule } from './contrasena-routing.module';
import { ComponentsModule } from "../../components/components.module";

import { ContrasenaPage } from './contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrasenaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContrasenaPage]
})
export class ContrasenaPageModule {}
