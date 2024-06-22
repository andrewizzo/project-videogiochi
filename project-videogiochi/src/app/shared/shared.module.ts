import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeModule } from "../home/home.module";
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
    declarations:[],
    imports:[CommonModule,HomeModule],
    exports:[HomeModule]
})
export class SharedModule{}