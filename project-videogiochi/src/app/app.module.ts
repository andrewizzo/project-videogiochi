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
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { ConfirmAddDialogComponent } from './confirm-add-dialog/confirm-add-dialog.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmAddDialogComponent,
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
    FormsModule,
  ],
  schemas:[],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
