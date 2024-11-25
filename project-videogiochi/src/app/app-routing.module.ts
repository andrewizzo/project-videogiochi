import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
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
    loadChildren:() => import('./home/home.module').then(h => h.HomeModule),
    canActivate:[authGuard]
  },
  {
    path:'insertProduct',
    loadChildren : () => import('./insert-product/insert-product.module').then(i => i.InsertProductModule),
    canActivate:[authGuard]
  },
  {
    path:'products',
    loadChildren:() => import('./products/products.module').then(p => p.ProductsModule),
    canActivate:[authGuard]
  },
  {
    path:'accessori',
    loadChildren:() => import('./accessori-page/accessori-page.module').then(a => a.AccessoriPageModule),
    canActivate:[authGuard]
  },
  {
    path:'playstationPage',
    loadChildren:() => import('./playstation-page/playstation-page.module').then(pl => pl.PlaystationPageModule),
    canActivate:[authGuard]
  },
  {
    path:'xboxPage',
    loadChildren:() => import('./xbox-page/xbox-page.module').then(x => x.XboxPageModule),
    canActivate:[authGuard]
  },
  {
    path:'NintendoPage',
    loadChildren:() => import('./nintendo-page/nintendo-page.module').then(n => n.NintendoPageModule),
    canActivate:[authGuard]
  },
  {
    path:'detailProduct',
    loadChildren:() => import('./detail-product/detail-product.module').then(d => d.DetailProductModule),
    canActivate:[authGuard]
  },
  {
    path:'cartShop',
    loadChildren:() => import('./cart-shop/cart-shop.module').then(c => c.CartShopModule),
    canActivate:[authGuard]
  },
  {
    path:'maps',
    loadChildren:() => import('./maps/maps.module').then(m => m.MapsModule),
    canActivate:[authGuard]
  },
  {
    path:'my-profile',
    loadChildren:() => import('./my-profile/my-profile.module').then(my => my.MyProfileModule),
    canActivate:[authGuard]
  },
  {
    path:'settings',
    loadChildren:() => import('./settings/settings.module').then(s => s.SettingsModule),
    canActivate:[authGuard]
  },
  {
    path:'ticket',
    loadChildren:() => import('./ticket/ticket.module').then(t => t.TicketModule),
    canActivate:[authGuard]
  },
  {
    path:'users',
    loadChildren:() => import('./users/users.module').then(u => u.UsersModule),
    canActivate:[authGuard],
    data:{role:'superadmin'}
  },
  {
    path:'single-user',
    loadChildren:() => import('./single-user/single-user.module').then(si => si.SingleUserModule),
    canActivate:[authGuard]
  },
  {
    path:'reset-password',
    loadChildren:() => import('./reset-password/reset-password.module').then(re => re.ResetPasswordModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
