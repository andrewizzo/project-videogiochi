import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    declarations:[ProductsComponent],
    imports:[CommonModule,SharedModule,ProductsRoutingModule],
    exports:[ProductsComponent]
})
export class ProductsModule{}