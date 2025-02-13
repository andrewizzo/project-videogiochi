import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  constructor(private router : Router){}

  oldRoute : string | null = '';
  ngOnInit(): void {
    this.oldRoute = sessionStorage.getItem('route')
  }

  isLoading : boolean = false;

  goBack(){
    if (this.oldRoute) {
      this.startLoading(this.oldRoute)
    }else{
      this.router.navigate(['home'])
    }
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
