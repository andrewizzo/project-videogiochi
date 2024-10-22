import { RouterModule, Routes } from "@angular/router";
import { MyProfileComponent } from "./my-profile.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:MyProfileComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MyProfileRoutingModule{}