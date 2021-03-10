import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nota1PageRoutingModule } from './nota1-routing.module';

import { Nota1Page } from './nota1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nota1PageRoutingModule
  ],
  declarations: [Nota1Page]
})
export class Nota1PageModule {}
