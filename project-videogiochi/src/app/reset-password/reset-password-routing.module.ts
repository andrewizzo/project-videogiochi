import { NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password.component";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
    {
        path:'',
        component:ResetPasswordComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ResetPasswordRoutingModule{}