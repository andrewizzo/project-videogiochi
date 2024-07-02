import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then(h => h.HomeModule)
  },
  {
    path:'insertProduct',
    loadChildren : () => import('./insert-product/insert-product.module').then(i => i.InsertProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
