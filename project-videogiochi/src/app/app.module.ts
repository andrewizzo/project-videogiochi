import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { InsertProductModule } from './insert-product/insert-product.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductsModule } from './products/products.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MapsComponent } from './maps/maps.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    InsertProductModule,
    ProductsModule,
    HttpClientModule
  ],
  schemas:[],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
