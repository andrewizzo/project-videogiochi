import { RouterModule, Routes } from "@angular/router";
import { MapsComponent } from "./maps.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:MapsComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MapsRoutingModule{}