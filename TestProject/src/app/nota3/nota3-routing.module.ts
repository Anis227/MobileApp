import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nota3Page } from './nota3.page';

const routes: Routes = [
  {
    path: '',
    component: Nota3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nota3PageRoutingModule {}
