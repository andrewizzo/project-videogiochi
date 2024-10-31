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
import { FormsModule } from '@angular/forms';


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
    HttpClientModule,
    FormsModule
  ],
  schemas:[],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
