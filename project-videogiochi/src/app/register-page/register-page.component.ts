import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(private userService : UsersService){}
  userName : string = "";
  userSurname : string = "";
  userEmail : string = "";
  userPassword : string = "";

  addUser(){
    const user = {
      name:this.userName,
      surname:this.userSurname,
      email:this.userEmail,
      password:this.userPassword
    }

    this.userService.addUser(user).subscribe(
      res => {console.log('Prodotto Inserito',res);},
      error => {console.error('errore nel salvataggio',error);}
    )
  }

}
