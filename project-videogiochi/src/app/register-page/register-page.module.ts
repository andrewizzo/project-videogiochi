import { NgModule } from "@angular/core";
import { RegisterPageComponent } from "./register-page.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RegisterPageRoutingModule } from "./register-page-routing.module";

@NgModule({
    declarations:[RegisterPageComponent],
    imports:[CommonModule,RegisterPageRoutingModule,SharedModule]
})
export class RegisterPageModule{}