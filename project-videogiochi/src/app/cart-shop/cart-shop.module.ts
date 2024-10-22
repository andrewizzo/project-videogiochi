import { NgModule } from "@angular/core";
import { CartShopComponent } from "./cart-shop.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CartShopRoutingModule } from "./cart-shop-routing.module";

@NgModule({
    declarations:[CartShopComponent],
    imports:[CommonModule,SharedModule,FormsModule,CartShopRoutingModule],
})
export class CartShopModule{}