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
  productImage : string = ''
  productCondizione : string = '';

  selectedValue: string | null = null;
  dropdownOpen: boolean = false;


  options = [
    { value: 'Accessori', image: '../../assets/imageCard/joystickPs4.png' },
    { value: 'Playstation', image: '../../assets/imageCard/PS5-Slim.png' },
    { value: 'Xbox', image: '../../assets/imageCard/xboxOneS.png' },
    { value: 'Nintendo', image: '../../assets/imageCard/nintendoSwitchNormal.png' },
    { value: 'Playstation', image: '../../assets/imageCard/playstatioPortal.png' },
    { value: 'Nintendo', image: '../../assets/imageCard/nintendoSwitchLite.png' }
  ];

  saveProduct(){
    const product = {
      name:this.productName,
      price:this.productPrice,
      category:this.productCategory,
      condizione:this.productCondizione,
      image:this.productImage
    }

    this.productService.addProduct(product).subscribe(
      res => {

        console.log('Prodotto Inserito',res);
        this.resetForm()
        

      },
      error => {console.error('errore nel salvataggio',error);}
    )

    console.log(product);
    
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Seleziona un'opzione
  selectOption(option: { value: string, image: string }) {
    this.selectedValue = option.image;
    this.productImage = option.image // Imposta la selezione
    this.dropdownOpen = false;   // Chiudi il menu
    console.log('Condizione selezionata:', this.selectedValue);
    // Qui puoi inviare il valore al backend per il salvataggio nel database
  }

  resetForm(){
    this.productName = ''
    this.productPrice = 0;
    this.productCategory = ''
    this.productCondizione = ''
    this.productImage = ''
    this.selectedValue = null
    console.log(this.productName,this.productPrice,this.productCategory,this.productCondizione,this.productImage,this.selectedValue);
    
  }
}
