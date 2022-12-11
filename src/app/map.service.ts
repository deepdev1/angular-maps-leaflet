import { Injectable } from '@angular/core';
import { mapConfig } from 'src/assets/map-config';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  config!:any;

  constructor() { 
    this.config = mapConfig;
  }

  getMapCenter() {
    return this.config.centers.bangalore;
  }

  getMapTileLayer() {
    return this.config.tilelayer.streetmap;
  }


}
