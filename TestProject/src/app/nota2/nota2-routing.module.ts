import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nota2Page } from './nota2.page';

const routes: Routes = [
  {
    path: '',
    component: Nota2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nota2PageRoutingModule {}
