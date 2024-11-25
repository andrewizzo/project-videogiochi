import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  userRole : string | null = ''
  isSuperAdmin : boolean = false;
  isLoading : boolean = false;

  constructor(private usersService : UsersService,private router : Router){
    this.userRole = sessionStorage.getItem('roles')
    this.isSuperAdmin = this.userRole === 'superadmin'
  }

  goBack(){
    this.startLoading('home')
  }

  goToUsers(){
    this.startLoading('users')
  }

  goToMyProfile(){
    this.startLoading('my-profile')
  }

  goToTicket(){
    this.startLoading('ticket')
  }

  logout(){
    this.usersService.logout()
    this.startLoading('login')
    // this.router.navigate(['/login'])
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
