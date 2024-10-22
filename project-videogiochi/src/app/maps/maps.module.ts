import { NgModule } from "@angular/core";
import { MapsComponent } from "./maps.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MapsRoutingModule } from "./maps-routing.module";

@NgModule({
    declarations:[MapsComponent],
    imports:[CommonModule,SharedModule,MapsRoutingModule]
})
export class MapsModule{ }