import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-accessori-page',
  templateUrl: './accessori-page.component.html',
  styleUrls: ['./accessori-page.component.css']
})
export class AccessoriPageComponent implements OnInit{
  isLoading : boolean = false;
  accessoriProducts : any[] = []

  constructor(private productService : ProductService,private router : Router){}

  ngOnInit(): void {
    this.getAccessoriProducts()
  }

  getAccessoriProducts(){
    this.productService.getAccessoriProducts().subscribe(
      (data) => {
        this.accessoriProducts = data
      },(error) => {
        console.error('errore nel recupero dei prodotti:',error);
      }
    )
  }

  goHome(){
    this.startLoading('home')
  }

  goToDetailProduct(idNumber:number){
    this.productService.productId = idNumber
    sessionStorage.setItem('route','/accessori')
    this.startLoading('detailProduct')
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
