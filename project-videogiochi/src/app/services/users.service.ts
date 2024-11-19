import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UsersService{
    private apiUrl = 'http://localhost:3000';

    constructor(private http : HttpClient ){}

    addUser(user:{name:string,surname:string,email:string,password:string}):Observable<any>{
        return this.http.post(`${this.apiUrl}/register`,user)
    }

    getUsers():Observable<any>{
        return this.http.get(`${this.apiUrl}/users`)
    }

    deleteUser(userId:number):Observable<any>{
        return this.http.delete(`${this.apiUrl}/users/${userId}`)
    }
}