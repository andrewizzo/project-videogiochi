import { Component } from '@angular/core';
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


  constructor(private usersService : UsersService,private router : Router){}

  onLogin():void{

    if (!this.email || !this.password) {
      //messaggio di errore
    }



    this.usersService.loginUser(this.email,this.password).subscribe({
      next:(response) => {
        this.userName = sessionStorage.getItem('userName')
        console.log(response);
        
        this.router.navigate(['/home'])
      },
      error:(error) => {
        
      }
    })
  }

}
