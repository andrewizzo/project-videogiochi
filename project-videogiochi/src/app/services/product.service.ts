import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    private apiUrl = 'http://localhost:3000/products';

    constructor(private http : HttpClient){}


    //{name:string;price:number;category:string;condizione:string}

    addProduct(product:Product):Observable<any>{
        return this.http.post(this.apiUrl,product)
    }

    getProducts():Observable<any>{
        return this.http.get(this.apiUrl)
    }

    getPlaystationProducts():Observable<any>{
        return this.http.get(`${this.apiUrl}/playstation`)
    }
    
    getXboxProducts():Observable<any>{
        return this.http.get(`${this.apiUrl}/xbox`)
    }
}