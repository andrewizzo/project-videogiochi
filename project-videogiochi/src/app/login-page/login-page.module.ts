import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./login-page.component";
import { CommonModule } from "@angular/common";
import { LoginPageRoutingModule } from "./login-page-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[LoginPageComponent],
    imports:[CommonModule,LoginPageRoutingModule,SharedModule]

})
export class LoginPageModule{}