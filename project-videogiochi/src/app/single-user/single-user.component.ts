import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../model/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit,OnDestroy {
  user : any | null;
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
    this.router.navigate(['/users'])
  }
}
