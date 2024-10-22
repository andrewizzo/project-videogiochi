import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-xbox-page',
  templateUrl: './xbox-page.component.html',
  styleUrls: ['./xbox-page.component.css']
})
export class XboxPageComponent implements OnInit {

  xboxProducts: any[] = []

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.getXboxProducts()
  }

  getXboxProducts(){
    this.productService.getXboxProducts().subscribe(
      (data) => {
        this.xboxProducts = data
      },(error) => {
        console.error('errore nel recupero dei prodotti:',error);
      }
    )
  }
}
