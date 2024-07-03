import { NgModule } from "@angular/core";
import { AccessoriPageComponent } from "./accessori-page.component";
import { AccessoriPageRoutingModule } from "./accessori-page-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[AccessoriPageComponent],
    imports:[AccessoriPageRoutingModule,CommonModule,SharedModule],
    exports:[]
})
export class AccessoriPageModule{}