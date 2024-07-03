import { RouterModule, Routes } from "@angular/router";
import { NintendoPageComponent } from "./nintendo-page.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:NintendoPageComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class NintendoPageRoutingModule{}