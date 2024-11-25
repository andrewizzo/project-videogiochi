import { NgModule } from "@angular/core";
import { MyProfileComponent } from "./my-profile.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { MyProfileRoutingModule } from "./my-profile-routing.module";
import { FormsModule } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@NgModule({
    declarations:[MyProfileComponent],
    imports:[CommonModule,SharedModule,MyProfileRoutingModule,FormsModule]
})
export class MyProfileModule{}