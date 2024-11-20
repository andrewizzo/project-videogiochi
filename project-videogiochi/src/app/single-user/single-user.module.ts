import { NgModule } from "@angular/core";
import { SingleUserComponent } from "./single-user.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { SingleUserRoutingModule } from "./single-user-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[SingleUserComponent],
    imports:[CommonModule,SharedModule,SingleUserRoutingModule,FormsModule]
})
export class SingleUserModule{}