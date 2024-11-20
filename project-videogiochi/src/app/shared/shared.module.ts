import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeModule } from "../home/home.module";
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { FooterComponent } from "../components/footer/footer.component";
import {MatTableModule} from '@angular/material/table';
import { ConfirmDeleteDialogComponent } from "../confirm-delete-dialog/confirm-delete-dialog.component";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations:[NavbarComponent,DashboardComponent,FooterComponent,ConfirmDeleteDialogComponent],
    imports:[CommonModule,MatTableModule,MatDialogModule,MatButtonModule],
    exports:[NavbarComponent,CommonModule,DashboardComponent,FooterComponent,MatDialogModule,MatButtonModule]
})
export class SharedModule{}