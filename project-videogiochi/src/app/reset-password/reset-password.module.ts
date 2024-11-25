import { NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ResetPasswordRoutingModule } from "./reset-password-routing.module";

@NgModule({
    declarations:[ResetPasswordComponent],
    imports:[CommonModule,ResetPasswordRoutingModule,SharedModule,FormsModule]
})
export class ResetPasswordModule{}