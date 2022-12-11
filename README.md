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


## Deployment - GitHub Pages

1. Install `angular-cli-ghpages`
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Uncomment `/dist` in `.gitignore`

3. Create a new branch
   ```bash
   git branch gh-pages
   git checkout gh-pages
   ```

4. Push changes to new remote branch
   ```bash
   git push -f -u origin gh-pages
   ```

5. Build project
   ```bash
   ng build --prod --base-href https://[username].github.io/[repo]/
   ```

6. Publish to gh-pages
   ```bash
   ngh --dir=dist/[project-name]
   ```

Source: https://stackoverflow.com/a/61909939

