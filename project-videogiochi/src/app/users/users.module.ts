import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[UsersComponent],
    imports:[CommonModule,SharedModule,UsersRoutingModule,FormsModule]
})
export class UsersModule{}