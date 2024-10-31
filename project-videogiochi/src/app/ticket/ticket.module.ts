import { NgModule } from "@angular/core";
import { TicketComponent } from "./ticket.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { TicketRoutingModule } from "./ticket-routing.module";

@NgModule({
    declarations:[TicketComponent],
    imports:[CommonModule,SharedModule,TicketRoutingModule]
})
export class TicketModule{}