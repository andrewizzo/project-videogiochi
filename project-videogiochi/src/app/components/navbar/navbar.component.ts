import { Component, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isOpenDiv : boolean = false;

  ngOnInit(): void {

  }

  openDiv(){
    this.isOpenDiv = !this.isOpenDiv
  }
  
}
