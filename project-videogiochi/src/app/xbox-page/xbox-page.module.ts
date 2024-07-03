import { NgModule } from "@angular/core";
import { XboxPageComponent } from "./xbox-page.component";
import { XboxPageRoutingModule } from "./xbox-page-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[XboxPageComponent],
    imports:[XboxPageRoutingModule,CommonModule,SharedModule],
    exports:[]
})
export class XboxPageModule{}