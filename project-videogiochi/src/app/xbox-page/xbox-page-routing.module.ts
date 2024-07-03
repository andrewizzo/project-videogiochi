import { RouterModule, Routes } from "@angular/router";
import { XboxPageComponent } from "./xbox-page.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:XboxPageComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class XboxPageRoutingModule{}