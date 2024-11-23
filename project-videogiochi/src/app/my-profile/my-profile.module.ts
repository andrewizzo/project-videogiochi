import { NgModule } from "@angular/core";
import { MyProfileComponent } from "./my-profile.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MyProfileRoutingModule } from "./my-profile-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[MyProfileComponent],
    imports:[CommonModule,SharedModule,MyProfileRoutingModule,FormsModule]
})
export class MyProfileModule{}