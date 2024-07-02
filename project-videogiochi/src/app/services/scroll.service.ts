import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ScrollService{
    
    constructor(){}

    scrollTo(section:string){
        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({behavior:'smooth'})
        }
    }
}