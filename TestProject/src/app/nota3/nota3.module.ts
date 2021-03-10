import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nota3PageRoutingModule } from './nota3-routing.module';

import { Nota3Page } from './nota3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nota3PageRoutingModule
  ],
  declarations: [Nota3Page]
})
export class Nota3PageModule {}
