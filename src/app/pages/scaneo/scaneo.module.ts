import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScaneoPageRoutingModule } from './scaneo-routing.module';
import { ComponentsModule } from "../../components/components.module";

import { ScaneoPage } from './scaneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScaneoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ScaneoPage]
})
export class ScaneoPageModule {}
