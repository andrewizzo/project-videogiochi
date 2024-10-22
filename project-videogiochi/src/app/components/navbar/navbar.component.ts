import { Component, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router : Router,private scrollService:ScrollService){}
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

  goToProducts(){
    this.router.navigate(['products'])
  }

  goToCartShop(){
    this.router.navigate(['cartShop'])
  }

  goToMaps(){
    this.router.navigate(['maps'])
  }

  goToMyProfile(){
    this.router.navigate(['my-profile'])
  }

  scrollToSection(section:string){
    this.router.navigate(['home']);
    this.scrollService.scrollTo(section)
  }
}
