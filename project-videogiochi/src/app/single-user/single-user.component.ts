import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  constructor(private userService : UsersService){}
  userName : string = "";
  userSurname : string = "";
  userEmail : string = "";
  userRuolo : string = "";
  userPassword : string = "";

  addUser(){
    const user = {
      name:this.userName,
      surname:this.userSurname,
      email:this.userEmail,
      ruolo:this.userRuolo,
      password:this.userPassword
    }

    this.userService.addUser(user).subscribe(
      res => {console.log('Prodotto Inserito',res);},
      error => {console.error('errore nel salvataggio',error);}
    )
    this.resetForm();
  }

  resetForm(){
    this.userName = "";
    this.userSurname = "";
    this.userEmail = "";
    this.userRuolo = "";
    this.userPassword = "";
  }
}
