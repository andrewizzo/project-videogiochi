import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router : Router){}

  goToPlaystationPage(){
    this.router.navigate(['playstationPage'])
  }

  goToXboxPage(){
    this.router.navigate(['xboxPage'])
  }

  goToNintendoPage(){
    this.router.navigate(['NintendoPage'])
  }

  goToAccessoriPage(){
    this.router.navigate(['accessori'])
  }

  goToAllProducts(){
    this.router.navigate(['products'])
  }


}
