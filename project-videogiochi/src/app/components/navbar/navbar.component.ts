import { Component, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router : Router){}
  isOpenDiv : boolean = false;

  ngOnInit(): void {

  }

  openDiv(){
    this.isOpenDiv = !this.isOpenDiv
  }
  
  goToInsertProduct(){
    this.router.navigate(['insertProduct'])
  }

  goToHome(){
    this.router.navigate(['home'])
  }
}
