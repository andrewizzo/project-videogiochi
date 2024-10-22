import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playstation-page',
  templateUrl: './playstation-page.component.html',
  styleUrls: ['./playstation-page.component.css']
})
export class PlaystationPageComponent implements OnInit{

  playstationProduct : any[] = []

  constructor(private productService : ProductService,private router : Router){}

  ngOnInit(): void {
    this.getPlaystationProduct()
  }

  getPlaystationProduct(){
    this.productService.getPlaystationProducts().subscribe(
      (data) => {
        this.playstationProduct = data
      },
      (error) => {
        console.error('errore nel recupero dei prodotti:',error);
        
      }
    )
  }

  goToDetailProduct(){
    this.router.navigate(['detailProduct'])
  }
}
