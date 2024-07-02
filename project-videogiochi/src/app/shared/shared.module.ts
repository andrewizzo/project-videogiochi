import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeModule } from "../home/home.module";
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { FooterComponent } from "../components/footer/footer.component";

@NgModule({
    declarations:[NavbarComponent,DashboardComponent,FooterComponent],
    imports:[CommonModule],
    exports:[NavbarComponent,CommonModule,DashboardComponent,FooterComponent]
})
export class SharedModule{}