import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isLoading : boolean = false;

  constructor(private router : Router){}

  goToPlaystationPage(){
    // this.router.navigate(['playstationPage'])
    this.startLoading('playstationPage')
  }

  goToXboxPage(){
    // this.router.navigate(['xboxPage'])
    this.startLoading('xboxPage')
  }

  goToNintendoPage(){
    // this.router.navigate(['NintendoPage'])
    this.startLoading('NintendoPage')
  }

  goToAccessoriPage(){
    // this.router.navigate(['accessori'])
    this.startLoading('accessori')
  }

  goToAllProducts(){
    // this.router.navigate(['products'])
    this.startLoading('products')
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
