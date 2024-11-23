import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap } from "rxjs";
import { Users } from "../model/users.model";
import { Router } from "@angular/router";
import { response } from "express";

@Injectable({
    providedIn:'root'
})
export class UsersService{
    private apiUrl = 'http://localhost:3000';
    userId : number | null = null

    constructor(private http : HttpClient,private router : Router ){}

    addUser(user:{name:string,surname:string,email:string,password:string}):Observable<any>{
        return this.http.post(`${this.apiUrl}/register`,user)
    }

    loginUser(email : string , password : string):Observable<any>{
        const credentials = {email,password}
        return this.http.post<any>(`${this.apiUrl}/login`,credentials).pipe(
            tap(response => {
                if (response && response.user && response.user.name && response.token) {
                    sessionStorage.setItem('email',response.user.email)
                    sessionStorage.setItem('userName', response.user.name);
                    sessionStorage.setItem('surname',response.user.surname)
                    sessionStorage.setItem('roles',response.user.roles)

                    sessionStorage.setItem('authToken', response.token);
                  }
            }),
            map(response => response), 
            catchError(error => {
                console.error('Errore durante il login', error);
                throw error;  // Rilancia l'errore per gestirlo successivamente
              })
        )
    }

    // Metodo per salvare il token nel localStorage
    saveToken(token: string): void {
        localStorage.setItem('authToken', token);
    }

    getUsers():Observable<any>{
        const token = sessionStorage.getItem('authToken')

        if (!token) {
            console.log('Token non trovato');
        }

        const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
        return this.http.get(`${this.apiUrl}/users`,{headers:headers})
    }

    setUserId(id:number){
        this.userId = id
    }

    getUserId():number | null{
        return this.userId
    }

    getUserRole():string | null {
        return sessionStorage.getItem('roles')
    }

    getSingleUser(id:number){
        const token = sessionStorage.getItem('authToken')

        if (!token) {
            console.log('Token non trovato');
        }

        const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
        const url = `${this.apiUrl}/users/${id}`
        return this.http.get<any>(url,{headers})
    }

     // Metodo per ottenere il token dal localStorage
    getToken(): string | null {
        return sessionStorage.getItem('authToken');
    }

    isAuthenticated(): boolean {
        return !!this.getToken(); // Restituisce true se esiste un token, false altrimenti
    }

    logout(): void {
        this.http.post(`${this.apiUrl}/logout`,{},{headers: { Authorization: `Bearer ${this.getToken()}` }})
        .subscribe({
            next:(response) => {
                localStorage.removeItem('authToken');
                sessionStorage.removeItem('authToken');
                sessionStorage.removeItem('email')
                sessionStorage.removeItem('roles')
                sessionStorage.removeItem('userName')
                sessionStorage.removeItem('surname')
                this.router.navigate(['/home'])
            },
            error:(error) => {
                console.error('Errore durante il logout', error);
                // Anche se c'è un errore nel logout, puoi comunque rimuovere il token localmente e fare il redirect
                localStorage.removeItem('authToken');
                sessionStorage.removeItem('authToken');
                sessionStorage.removeItem('email')
                sessionStorage.removeItem('roles')
                sessionStorage.removeItem('userName')
                sessionStorage.removeItem('surname')
                this.router.navigate(['/login']);
            }
        })
    }

    deleteUser(userId:number):Observable<any>{
        return this.http.delete(`${this.apiUrl}/users/${userId}`)
    }
}