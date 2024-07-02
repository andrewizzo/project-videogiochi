import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent {

  constructor(private productService:ProductService){}

  productName : string = ''
  productPrice : number = 0
  productCategory : string = ''

  saveProduct(){
    const product = {
      name:this.productName,
      price:this.productPrice,
      category:this.productCategory
    }

    this.productService.addProduct(product).subscribe(
      res => {console.log('Prodotto Inserito',res);},
      error => {console.error('errore nel salvataggio',error);}
    )
  }
}
