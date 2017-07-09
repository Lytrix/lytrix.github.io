var elemDiv = document.createElement('div');
elemDiv.id = 'map';
document.body.appendChild(elemDiv);

var start_at_zoom = 13;
var zoomLimit = true;
var geojsonMarkerStyle = {
    radius: 3,
    fillColor: "#ff7800",
    color: "#000",
    weight: 0.5,
    opacity: 1,
    fillOpacity: 0.8
};
var map = L.map('map', {
                  maxBounds: [
                      [52.269470, 4.72876], //southWest
                      [52.4322, 5.07916] //northEast
                  ]
              })
              .setView([52.379189, 4.899431], 11);      
// Add basemap
var baseLayerOptions = {
                  minZoom: 11,
                  maxZoom: 21,
                  subdomains: ['t1', 't2', 't3', 't4'],
                  attribution: '&copy; <a href="http://api.datapunt.amsterdam.nl">Datapunt</a>',
                  fadeAnimation: false
              };
var baseLayers = { 'Topografie': L.tileLayer('https://{s}.datapunt.amsterdam.nl/topo_google/{z}/{x}/{y}.png', baseLayerOptions)};
baseLayers.Topografie.addTo(map);

    
function wfsQuery() {
    var geoJsonURL = 'https://map.data.amsterdam.nl/maps/bgtobjecten';
    var defaultParameters = {
        service: 'WFS',
        version: '1.1.0',
        request: 'getFeature',
        typeName: 'BGTPLUS_BAK_afval_apart_plaats',
        maxFeatures: 3000,
        outputFormat: 'geoJson',
        srsName: 'EPSG:4326'
    };

    var customParams = {
        bbox: map.getBounds().toBBoxString()
        };
    var parameters = L.Util.extend(defaultParameters, customParams);
    // Show send WFS request in console 
    console.log(geoJsonURL + L.Util.getParamString(parameters));
    $.ajax({
        jsonp: true,
        url: geoJsonURL + L.Util.getParamString(parameters),
        dataType: 'json',
        jsonpCallback: 'getJson',
        success: loadGeoJson
        });
}


function reload_wfs() {
    mapCenter = map.getCenter();
    console.log(mapCenter);
    mapZoom  = map.getZoom();
    if (map.getZoom() > start_at_zoom && zoomLimit === true) {
        try { geojsonLayer.clearLayers();
              $( ".legend" ).remove();
        }
        catch (e) {}
        wfsQuery();

    } 
    else if (zoomLimit === false){
        try { geojsonLayer.clearLayers();
              $( ".legend" ).remove();
        }
        catch (e) {}
        wfsQuery();
    } 
    else 
    {
        alert("please zoom in to see the polygons!");
        try { geojsonLayer.clearLayers();}
        catch (e) {}
    }
}

function loadGeoJson(dataGeoJson) {
    geojsonLayer = L.geoJson(
    dataGeoJson, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerStyle);
        }
    }).addTo(map);          
}
// Update wfsQuery with new BBOX on panning map
map.on('moveend', reload_wfs);