import { Component, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userName : string = ''
  userRole : string | null = ''
  isSuperAdmin : boolean = false;

  constructor(private router : Router,private scrollService:ScrollService,private usersService : UsersService){
    this.userRole = sessionStorage.getItem('roles')
    this.isSuperAdmin = this.userRole === 'superadmin'
  }
  isOpenDiv : boolean = false;

  ngOnInit(): void {
    const storedUserName = sessionStorage.getItem('userName')

    if(storedUserName){
      this.userName = storedUserName
    }
  }

  openDiv(){
    this.isOpenDiv = !this.isOpenDiv
    console.log('openDiv chiamato', this.isOpenDiv); // Debug
  }
  
  closeOverlay(event: Event) {
    console.log('closeOverlay chiamato', event); // Debug
    event.stopPropagation();  // Impedisce la propagazione dell'evento nel caso ci sia un clic dentro l'overlay
    this.isOpenDiv = false; // Chiudi l'overlay
  }

  // closeOverlay(event: MouseEvent) {
  //   // Chiudi l'overlay solo se si clicca fuori dal menu
  //   const overlayElement = document.querySelector('.overlay');
  //   const contentElement = document.querySelector('.customBorder');

  //   if (overlayElement && !overlayElement.contains(event.target as Node) && 
  //       contentElement && !contentElement.contains(event.target as Node)) {
  //         console.log('Clic fuori dall\'overlay, chiudo il menu');
  //         this.isOpenDiv = false;
  //   }else{
  //     console.log('Clic dentro l\'overlay, non fare nulla');
  //   }
  // }

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

  goToSettings(){
    this.router.navigate(['settings'])
  }

  scrollToSection(section:string){
    this.router.navigate(['home']);
    this.scrollService.scrollTo(section)
  }

  logout(){
    this.usersService.logout()
    this.router.navigate(['/login'])
  }

}
