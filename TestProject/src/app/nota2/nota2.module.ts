import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nota2PageRoutingModule } from './nota2-routing.module';

import { Nota2Page } from './nota2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nota2PageRoutingModule
  ],
  declarations: [Nota2Page]
})
export class Nota2PageModule {}
