import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nota1Page } from './nota1.page';

const routes: Routes = [
  {
    path: '',
    component: Nota1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nota1PageRoutingModule {}
