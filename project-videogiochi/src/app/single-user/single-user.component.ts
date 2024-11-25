import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../model/users.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit,OnDestroy {
  user : any | null;
  isLoading : boolean = false;
  constructor(private userService : UsersService,private router : Router){}
  
  ngOnDestroy(): void {
    sessionStorage.removeItem('user')
  }

  ngOnInit(): void {
    const savedUser = sessionStorage.getItem('user')
    if (savedUser) {
      this.user = JSON.parse(savedUser)
      this.setSingleUser(this.user)
    }else{
      const userId = this.userService.getUserId()

      if (userId !== null) {
        
        this.userService.getSingleUser(userId).subscribe((res) => {
          this.user = res
          this.setSingleUser(this.user)
          sessionStorage.setItem('user',JSON.stringify(this.user))
        })
      }
    }
  }

  userName : string = "";
  userSurname : string = "";
  userEmail : string = "";
  userRuolo : string = "";
  userPassword : string = "";

  setSingleUser(user:any){
    this.userName = user.name
    this.userEmail = user.email
    this.userRuolo = user.roles
    this.userSurname = user.surname
  }

  resetForm(){
    this.userName = "";
    this.userSurname = "";
    this.userEmail = "";
    this.userRuolo = "";
    this.userPassword = "";
  }

  goToUsers(){
    sessionStorage.removeItem('user')
    this.startLoading('users')
    // this.router.navigate(['/users'])
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
