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
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { PlaystationPageComponent } from './playstation-page/playstation-page.component';
import { XboxPageComponent } from './xbox-page/xbox-page.component';
import { NintendoPageComponent } from './nintendo-page/nintendo-page.component';
import { AccessoriPageComponent } from './accessori-page/accessori-page.component';

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
