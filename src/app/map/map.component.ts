import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

import * as L from 'leaflet';
import { MapService } from '../map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements AfterViewInit {

  private map!:L.Map;

  private initMap() {
    const mapOptions:L.MapOptions = {
      center: this.mapService.getMapCenter(),
      zoom: 15,
      zoomControl: false
    }
    this.map = L.map('map', mapOptions);
  
    const tiles:L.TileLayer = L.tileLayer(this.mapService.getMapTileLayer(), {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

    L.control.zoom({
      position: "bottomright"
    }).addTo(this.map);
    
  }
  
  constructor(private mapService:MapService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  themeIcon:string = "assets/img/moon.svg";
  isDarkTheme:boolean = false;
  switchTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeIcon = this.isDarkTheme ? "assets/img/sun.svg" : "assets/img/moon.svg";
  }

}
