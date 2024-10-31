import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren:() => import('./login-page/login-page.module').then(l => l.LoginPageModule)
  },
  {
    path:'register',
    loadChildren:() => import('./register-page/register-page.module').then(r => r.RegisterPageModule)
  },
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
  },
  {
    path:'detailProduct',
    loadChildren:() => import('./detail-product/detail-product.module').then(d => d.DetailProductModule)
  },
  {
    path:'cartShop',
    loadChildren:() => import('./cart-shop/cart-shop.module').then(c => c.CartShopModule)
  },
  {
    path:'maps',
    loadChildren:() => import('./maps/maps.module').then(m => m.MapsModule)
  },
  {
    path:'my-profile',
    loadChildren:() => import('./my-profile/my-profile.module').then(my => my.MyProfileModule)
  },
  {
    path:'settings',
    loadChildren:() => import('./settings/settings.module').then(s => s.SettingsModule)
  },
  {
    path:'ticket',
    loadChildren:() => import('./ticket/ticket.module').then(t => t.TicketModule)
  },
  {
    path:'users',
    loadChildren:() => import('./users/users.module').then(u => u.UsersModule)
  },
  {
    path:'single-user',
    loadChildren:() => import('./single-user/single-user.module').then(si => si.SingleUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
