import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  private map!: L.Map;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([40.8508, 14.2692], 18); // Imposta le coordinate iniziali e il livello di zoom

    // Aggiungi il layer della mappa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Aggiungi un marker in un punto esatto
    const marker = L.marker([40.8508, 14.2692]).addTo(this.map);
    marker.bindPopup('Videogiochi & Informatica').openPopup();
  }
}
