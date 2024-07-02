import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private scrollService:ScrollService){}

  scrollToSection(section:string){
    this.scrollService.scrollTo(section)
  }
}
