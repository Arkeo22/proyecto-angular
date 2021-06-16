import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as L from  'leaflet';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  mapa: any
  marcador: any
  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('posicionMapa').setView([39.3915897309285, -3.221885744466565], 16)
    L.marker([39.3915897309285, -3.221885744466565]).addTo(this.mapa).bindPopup('Estamos aqui')
    .openPopup();
    const trozos = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 19
    })
    trozos.addTo(this.mapa)
    
  }

}
