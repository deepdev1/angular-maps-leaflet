# Angular Maps UI

Maps UI with typical features and data visualization


## About Project

```text
angular: 15
npm: 8
```

## Integrations

1. Leaflet

   - ```bash
     npm install leaflet
     npm install --save-dev @types/leaflet
     ```

   - Add leaflet styles `angular.json`
     ```json
     {
        ...
        "projects": {
            "architect": {
                "styles": [
                    ...
                    "./node_modules/leaflet/dist/leaflet.css"
                ],
            }
        }
        ...
     }
     ```

    - Import leaflet library in the component of interest
      ```typescript
      import * as L from 'leaflet';
      ```

    - Initialize map (`L.map`)
      ```typescript
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
      ```

      - Add map `div` to template
        - ```html
          <div class="map-container">
            <div class="map-frame">
                <div id="map"></div>
            </div>
          </div>  
          ```

        - ```scss
          .map-container {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              // margin: 0.5rem;

              .map-frame {
                  #map {
                      height: 100%;
                  }
              }
          }
          ```


