import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '/store',
    loadChildren: () => import('src/app/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: '/',
    loadChildren: () => import('src/app/home-page/home-page.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
