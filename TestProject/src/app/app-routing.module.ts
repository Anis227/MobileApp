import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'diagnostic',
    loadChildren: () => import('./diagnostic/diagnostic.module').then( m => m.DiagnosticPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FAQsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'soalan',
    loadChildren: () => import('./soalan/soalan.module').then( m => m.SoalanPageModule)
  },
  {
    path: 'set1',
    loadChildren: () => import('./set1/set1.module').then( m => m.Set1PageModule)
  },
  {
    path: 'set2',
    loadChildren: () => import('./set2/set2.module').then( m => m.Set2PageModule)
  },
  {
    path: 'set4',
    loadChildren: () => import('./set4/set4.module').then( m => m.Set4PageModule)
  },
  {
    path: 'set3',
    loadChildren: () => import('./set3/set3.module').then( m => m.Set3PageModule)
  },
  {
    path: 'nota',
    loadChildren: () => import('./nota/nota.module').then( m => m.NotaPageModule)
  },
  {
    path: 'nota1',
    loadChildren: () => import('./nota1/nota1.module').then( m => m.Nota1PageModule)
  },
  {
    path: 'nota2',
    loadChildren: () => import('./nota2/nota2.module').then( m => m.Nota2PageModule)
  },
  {
    path: 'nota3',
    loadChildren: () => import('./nota3/nota3.module').then( m => m.Nota3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
