import { NgModule } from "@angular/core";
import { InsertProductComponent } from "./insert-product.component";
import { CommonModule } from "@angular/common";
import { InsertProductRoutingModule } from "./insert-product-routing.module";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[InsertProductComponent],
    imports:[CommonModule,InsertProductRoutingModule,SharedModule,FormsModule],
    // exports:[InsertProductComponent]
})
export class InsertProductModule{}