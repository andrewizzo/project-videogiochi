import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    private apiUrl = 'http://localhost:3000/products';

    constructor(private http : HttpClient){}

    addProduct(product:{name:string;price:number;category:string}):Observable<any>{
        return this.http.post(this.apiUrl,product)
    }

    getProducts():Observable<any>{
        return this.http.get(this.apiUrl)
    }

    getPlaystationProducts():Observable<any>{
        return this.http.get(this.apiUrl)
    }
}