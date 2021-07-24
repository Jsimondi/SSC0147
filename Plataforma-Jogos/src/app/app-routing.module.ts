import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './home-page/store/store.component';


const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
  // {
  //   path: '/store',
  //   component: StoreComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
