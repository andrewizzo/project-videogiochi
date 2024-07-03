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
  },
  {
    path:'products',
    loadChildren:() => import('./products/products.module').then(p => p.ProductsModule)
  },
  {
    path:'accessori',
    loadChildren:() => import('./accessori-page/accessori-page.module').then(a => a.AccessoriPageModule)
  },
  {
    path:'playstationPage',
    loadChildren:() => import('./playstation-page/playstation-page.module').then(pl => pl.PlaystationPageModule)
  },
  {
    path:'xboxPage',
    loadChildren:() => import('./xbox-page/xbox-page.module').then(x => x.XboxPageModule)
  },
  {
    path:'NintendoPage',
    loadChildren:() => import('./nintendo-page/nintendo-page.module').then(n => n.NintendoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
