import { RouterModule, Routes } from "@angular/router";
import { CartShopComponent } from "./cart-shop.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:CartShopComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CartShopRoutingModule{ }