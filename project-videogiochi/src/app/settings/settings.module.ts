import { NgModule } from "@angular/core";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[SettingsComponent],
    imports:[SettingsRoutingModule,CommonModule,SharedModule]
})
export class SettingsModule{}