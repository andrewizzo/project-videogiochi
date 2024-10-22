import { NgModule } from "@angular/core";
import { DetailProductComponent } from "./detail-product.component";
import { DetailProductRoutingModule } from "./detail-product-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[DetailProductComponent],
    imports:[DetailProductRoutingModule,CommonModule,SharedModule],
    exports:[]
})
export class DetailProductModule{}