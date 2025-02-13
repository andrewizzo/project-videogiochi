import { NgModule } from "@angular/core";
import { ContacUsRoutingModule } from "./contact-us-routing.module";
import { ContactUsComponent } from "./contact-us.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[ContactUsComponent],
    imports:[ContacUsRoutingModule,CommonModule,SharedModule],
    exports:[]
})
export class ContactUsModule{}