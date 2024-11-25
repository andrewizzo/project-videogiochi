import { ChangeDetectorRef, Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  userName : string | null = ''
  email : string = ''
  password : string = ''
  isLoading : boolean = false;


  constructor(private usersService : UsersService,private router : Router, private cdr: ChangeDetectorRef){}

  onLogin():void{

    if (!this.email || !this.password) {
      // Messaggio di errore se i campi sono vuoti
      alert("Email e Password sono obbligatori!");
      return;
    }

    this.isLoading = true;


    this.usersService.loginUser(this.email,this.password).subscribe({
      next:(response) => {

        this.userName = sessionStorage.getItem('userName')
        console.log(response);
        this.router.navigate(['/home'])
      },
      error:(error) => {
        // Gestione dell'errore di login
        console.error('Errore durante il login:', error);
        alert('Credenziali errate. Riprova.');

        this.resetForm();  // Resetta i campi in caso di errore
        this.isLoading = false;
      }
    })
  }

  resetForm(){
    console.log("Resetting form...");
    this.email = ''
    this.password = ''
    this.cdr.detectChanges();
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

}
