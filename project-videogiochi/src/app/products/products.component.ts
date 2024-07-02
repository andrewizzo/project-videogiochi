import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private productService : ProductService){}
  ngOnInit(): void {
    this.getAllProducts()
  }

  products : Product[] = [];
  
  
  getAllProducts(){
    console.log(this.products);
    this.productService.getProducts().subscribe(
      (data:Product[]) => {
        this.products = data   
      }
    )
  }
}
