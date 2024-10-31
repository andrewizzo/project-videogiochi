import { RouterModule, Routes } from "@angular/router";
import { TicketComponent } from "./ticket.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:TicketComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TicketRoutingModule{}