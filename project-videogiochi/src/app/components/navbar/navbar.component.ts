import { Component, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';
import { UsersService } from 'src/app/services/users.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userName : string = ''
  userRole : string | null = ''
  isSuperAdmin : boolean = false;
  isOpenDiv : boolean = false;
  isLoading : boolean = false;

  constructor(private router : Router,private scrollService:ScrollService,private usersService : UsersService){
    this.userRole = sessionStorage.getItem('roles')
    this.isSuperAdmin = this.userRole === 'superadmin'
  }
  

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
    if (this.router.url !== '/insertProduct') {
      this.startLoading('insertProduct')
    }
  }

  goToHome(){
    if (this.router.url === '/home') {
      this.scrollToSection('prodotti')
    }else{
      this.startLoading('home')
    }
  }

  goToProducts(){
    if(this.router.url !== '/products'){
      this.startLoading('products')
    }
  }

  goToCartShop(){
    if(this.router.url !== '/cartShop'){
      this.startLoading('cartShop')
    }
  }

  goToMaps(){
    if(this.router.url !== '/maps'){
      this.startLoading('maps')
    }
  }

  goToMyProfile(){
    if(this.router.url !== '/my-profile'){
      this.startLoading('my-profile')
    }
  }

  goToSettings(){
    if(this.router.url !== '/settings'){
      this.startLoading('settings')
    }
  }

  scrollToSection(section:string){
    this.router.navigate(['home']);
    this.scrollService.scrollTo(section)
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
