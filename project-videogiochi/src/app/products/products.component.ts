import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  isLoading : boolean = false
  constructor(private productService : ProductService,private router : Router){}
  ngOnInit(): void {
    this.getAllProducts()
  }

  products : any[] = [];
  
  
  getAllProducts(){
    console.log(this.products);
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data   
      }
    )
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

  goHome(){
    this.startLoading('home')
  }

  goToDetailProduct(idNumber:number){
    this.productService.productId = idNumber
    sessionStorage.setItem('route','/products')
    this.startLoading('detailProduct')
  }
}
