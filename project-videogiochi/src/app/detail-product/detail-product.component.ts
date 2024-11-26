import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit,OnDestroy{

  oldRoute : string | null = null;
  isLoading : boolean = false;
  product: any;
  productName : string = "";
  productPrice : string = "";
  productCategory : string = "";
  productImage : string = "";
  productCondizione : string = "";

  constructor(private productsService : ProductService,private router : Router){}
  ngOnDestroy(): void {
    sessionStorage.removeItem('product')
    sessionStorage.removeItem('route')
  }

  ngOnInit(): void {
    this.oldRoute = sessionStorage.getItem('route')
    const savedProduct = sessionStorage.getItem('product')

    if (savedProduct) {
      this.product = JSON.parse(savedProduct)
      this.setSingleProduct(this.product)
    }else{
      const productId = this.productsService.getProductId()

      if (productId !== null) {
        this.productsService.getSingleProduct(productId).subscribe((res) => {
          this.product = res
          this.setSingleProduct(this.product)
          sessionStorage.setItem('product',JSON.stringify(this.product))
        })
      }
    }
  }

  setSingleProduct(product:any){
    this.productName = product.name;
    this.productName = product.price;
    this.productCategory = product.category;
    this.productImage = product.image;
    this.productCondizione = product.condizione
  }

  goBack(){
    if (this.oldRoute) {
      this.startLoading(this.oldRoute)
    }else{
      this.router.navigate(['home'])
    }
  }

  startLoading(route: string){
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
