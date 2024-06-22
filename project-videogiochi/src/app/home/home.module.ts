import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../components/navbar/navbar.component";

@NgModule({
    declarations:[HomeComponent,NavbarComponent],
    imports:[HomeRoutingModule,CommonModule],
    exports:[HomeComponent]
})
export class HomeModule{}