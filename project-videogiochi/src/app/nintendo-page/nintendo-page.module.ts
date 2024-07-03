import { NgModule } from "@angular/core";
import { NintendoPageComponent } from "./nintendo-page.component";
import { NintendoPageRoutingModule } from "./nintendo-page-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[NintendoPageComponent],
    imports:[NintendoPageRoutingModule,CommonModule,SharedModule],
    exports:[]
})
export class NintendoPageModule{}