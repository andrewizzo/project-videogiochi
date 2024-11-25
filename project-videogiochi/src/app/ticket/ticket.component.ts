import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  isLoading : boolean = false;

  constructor(private router : Router){}

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
