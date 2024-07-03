import { Component, NgModule } from "@angular/core";
import { PlaystationPageComponent } from "./playstation-page.component";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
    {
        path:'',
        component:PlaystationPageComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PlaystationPageRoutingModule{}