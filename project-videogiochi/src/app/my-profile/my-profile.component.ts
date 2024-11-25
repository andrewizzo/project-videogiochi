import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{

  isDisabled : boolean = false;
  isLoading : boolean = false;

  constructor(private userService : UsersService,private dialog : MatDialog,private router : Router){}
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
    if (this.isDisabled === false) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false
    }
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

  goToSetting(){
    this.startLoading('settings')
  }

  startLoading(route: string) {
    // Imposta isLoading su true
    this.isLoading = true;
  
    // Usa setTimeout per forzare il rendering dello spinner
    setTimeout(() => {
      this.router.navigate([route]);
  
      // Ascolta quando la navigazione è completata
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)  // Solo quando la navigazione è completata
      ).subscribe(() => {
        // Una volta che la navigazione è completata, imposta isLoading a false
        this.isLoading = false;
      });
    }, 600);  // Delay di 600ms per forzare il rendering dello spinner
  }
}
