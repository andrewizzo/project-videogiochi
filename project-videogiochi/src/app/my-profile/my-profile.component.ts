import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{

  isDisabled : boolean = false;
  constructor(private userService : UsersService,private dialog : MatDialog){}
  ngOnInit(): void {
    this.getUserName()
  }
  userName : string = "";
  userSurname : string = "";
  userEmail : string = "";
  userRuolo : string = "";
  userPassword : string = "";

  //userId: number,,,,id: userId
  openDialog():void{
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '400px', // Larghezza del dialog
      data: {  } // Passa l'id dell'utente come dato al dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Esegui l'eliminazione se l'utente conferma
        this.putUser();
      }
    });
  }

  putUser(){
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
    this.isDisabled = false;
  }

  modifyUser(){
    this.isDisabled = true;
  }

  resetForm(){
    this.userName = "";
    this.userSurname = "";
    this.userEmail = "";
    this.userRuolo = "";
    this.userPassword = "";
  }

  getUserName(){
    const storedUserName = sessionStorage.getItem('userName')
    const storedSurname = sessionStorage.getItem('surname')
    const storedEmail = sessionStorage.getItem('email')
    const storedRoles = sessionStorage.getItem('roles')
    if (storedUserName && storedSurname && storedEmail && storedRoles) {
      this.userName = storedUserName
      this.userSurname = storedSurname
      this.userEmail = storedEmail
      this.userRuolo = storedRoles
    }
    // console.log(storedEmail,storedRoles,storedSurname,storedUserName);
    
  }
}
