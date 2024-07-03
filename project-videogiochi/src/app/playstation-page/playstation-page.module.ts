import { NgModule } from "@angular/core";
import { PlaystationPageComponent } from "./playstation-page.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { PlaystationPageRoutingModule } from "./playstation-page-routing.module";

@NgModule({
    declarations:[PlaystationPageComponent],
    imports:[CommonModule,SharedModule,PlaystationPageRoutingModule],
    exports:[]
})
export class PlaystationPageModule{}