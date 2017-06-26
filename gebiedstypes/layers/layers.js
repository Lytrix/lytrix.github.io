var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Topografie',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'https://t1.data.amsterdam.nl/topo_wm_zw/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="https://api.data.amsterdam.nl">Datapunt</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_BedrijventerreinenWerkgebieden = new ol.format.GeoJSON();
var features_BedrijventerreinenWerkgebieden = format_BedrijventerreinenWerkgebieden.readFeatures(geojson_BedrijventerreinenWerkgebieden, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_BedrijventerreinenWerkgebieden = new ol.source.Vector();
jsonSource_BedrijventerreinenWerkgebieden.addFeatures(features_BedrijventerreinenWerkgebieden);var lyr_BedrijventerreinenWerkgebieden = new ol.layer.Vector({
                source:jsonSource_BedrijventerreinenWerkgebieden, 
                style: style_BedrijventerreinenWerkgebieden,
                title: "Bedrijventerreinen/Werkgebieden"
            });var format_Winkelgebieden = new ol.format.GeoJSON();
var features_Winkelgebieden = format_Winkelgebieden.readFeatures(geojson_Winkelgebieden, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Winkelgebieden = new ol.source.Vector();
jsonSource_Winkelgebieden.addFeatures(features_Winkelgebieden);var lyr_Winkelgebieden = new ol.layer.Vector({
                source:jsonSource_Winkelgebieden, 
                style: style_Winkelgebieden,
                title: "Winkelgebieden"
            });var format_Parken = new ol.format.GeoJSON();
var features_Parken = format_Parken.readFeatures(geojson_Parken, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Parken = new ol.source.Vector();
jsonSource_Parken.addFeatures(features_Parken);var lyr_Parken = new ol.layer.Vector({
                source:jsonSource_Parken, 
                style: style_Parken,
                title: "Parken"
            });var format_Woongebieden = new ol.format.GeoJSON();
var features_Woongebieden = format_Woongebieden.readFeatures(geojson_Woongebieden, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Woongebieden = new ol.source.Vector();
jsonSource_Woongebieden.addFeatures(features_Woongebieden);var lyr_Woongebieden = new ol.layer.Vector({
                source:jsonSource_Woongebieden, 
                style: style_Woongebieden,
                title: "Woongebieden"
            });var format_Rayons = new ol.format.GeoJSON();
var features_Rayons = format_Rayons.readFeatures(geojson_Rayons, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Rayons = new ol.source.Vector();
jsonSource_Rayons.addFeatures(features_Rayons);var lyr_Rayons = new ol.layer.Vector({
                source:jsonSource_Rayons, 
                style: style_Rayons,
                title: "Rayons"
            });

lyr_BedrijventerreinenWerkgebieden.setVisible(true);lyr_Winkelgebieden.setVisible(true);lyr_Parken.setVisible(true);lyr_Woongebieden.setVisible(true);lyr_Rayons.setVisible(true);
var layersList = [baseLayer,lyr_BedrijventerreinenWerkgebieden,lyr_Winkelgebieden,lyr_Parken,lyr_Woongebieden,lyr_Rayons];
lyr_BedrijventerreinenWerkgebieden.set('fieldAliases', {'bbga_code': 'bbga_code', 'id': 'id', 'lokatie': 'lokatie', 'naam': 'naam', 'opp': 'opp', 'beschikbaa': 'beschikbaa', 'uitgifte': 'uitgifte', 'nota': 'nota', 'oppmi': 'oppmi', 'soort': 'soort', 'lokuitgift': 'lokuitgift', 'srt': 'srt', 'gebieden22': 'gebieden22', 'concgebied': 'concgebied', 'concnaam': 'concnaam', });
lyr_Winkelgebieden.set('fieldAliases', {'id': 'id', 'gebcode': 'gebcode', 'gebnaam': 'gebnaam', 'code': 'code', 'oppha': 'oppha', 'ivocode': 'ivocode', 'codewg16': 'codewg16', 'winkgeb14': 'winkgeb14', 'concgebied': 'concgebied', 'concnaam': 'concnaam', 'sd15': 'sd15', 'bbgacode': 'bbgacode', });
lyr_Parken.set('fieldAliases', {'_links': '_links', '_display': '_display', 'sleutelverzendend': 'sleutelverzendend', 'openbare_ruimte_identificatie': 'openbare_ruimte_identificatie', 'openbare_ruimte_code': 'openbare_ruimte_code', 'date_modified': 'date_modified', 'document_mutatie': 'document_mutatie', 'document_nummer': 'document_nummer', 'begin_geldigheid': 'begin_geldigheid', 'einde_geldigheid': 'einde_geldigheid', 'mutatie_gebruiker': 'mutatie_gebruiker', 'status': 'status', 'bron': 'bron', 'type': 'type', 'naam': 'naam', 'naam_17_posities': 'naam_17_posities', 'naam_24_posities': 'naam_24_posities', 'straat_nummer': 'straat_nummer', 'woonplaats': 'woonplaats', 'adressen': 'adressen', 'dataset': 'dataset', });
lyr_Woongebieden.set('fieldAliases', {'woontype': 'woontype', 'pid': 'pid', });
lyr_Rayons.set('fieldAliases', {'id': 'id', 'naam': 'naam', 'sd2015': 'sd2015', 'rayon15': 'rayon15', });
lyr_BedrijventerreinenWerkgebieden.set('fieldImages', {'bbga_code': 'TextEdit', 'id': 'TextEdit', 'lokatie': 'TextEdit', 'naam': 'TextEdit', 'opp': 'TextEdit', 'beschikbaa': 'TextEdit', 'uitgifte': 'TextEdit', 'nota': 'TextEdit', 'oppmi': 'TextEdit', 'soort': 'TextEdit', 'lokuitgift': 'TextEdit', 'srt': 'TextEdit', 'gebieden22': 'TextEdit', 'concgebied': 'TextEdit', 'concnaam': 'TextEdit', });
lyr_Winkelgebieden.set('fieldImages', {'id': 'TextEdit', 'gebcode': 'TextEdit', 'gebnaam': 'TextEdit', 'code': 'TextEdit', 'oppha': 'TextEdit', 'ivocode': 'TextEdit', 'codewg16': 'TextEdit', 'winkgeb14': 'TextEdit', 'concgebied': 'TextEdit', 'concnaam': 'TextEdit', 'sd15': 'TextEdit', 'bbgacode': 'TextEdit', });
lyr_Parken.set('fieldImages', {'_links': 'TextEdit', '_display': 'TextEdit', 'sleutelverzendend': 'TextEdit', 'openbare_ruimte_identificatie': 'TextEdit', 'openbare_ruimte_code': 'TextEdit', 'date_modified': 'TextEdit', 'document_mutatie': 'TextEdit', 'document_nummer': 'TextEdit', 'begin_geldigheid': 'TextEdit', 'einde_geldigheid': 'TextEdit', 'mutatie_gebruiker': 'TextEdit', 'status': 'TextEdit', 'bron': 'TextEdit', 'type': 'TextEdit', 'naam': 'TextEdit', 'naam_17_posities': 'TextEdit', 'naam_24_posities': 'TextEdit', 'straat_nummer': 'TextEdit', 'woonplaats': 'TextEdit', 'adressen': 'TextEdit', 'dataset': 'TextEdit', });
lyr_Woongebieden.set('fieldImages', {'woontype': 'TextEdit', 'pid': 'TextEdit', });
lyr_Rayons.set('fieldImages', {'id': 'TextEdit', 'naam': 'TextEdit', 'sd2015': 'TextEdit', 'rayon15': 'TextEdit', });
lyr_BedrijventerreinenWerkgebieden.set('fieldLabels', {'bbga_code': 'inline label', 'id': 'no label', 'lokatie': 'no label', 'naam': 'header label', 'opp': 'no label', 'beschikbaa': 'no label', 'uitgifte': 'no label', 'nota': 'no label', 'oppmi': 'no label', 'soort': 'no label', 'lokuitgift': 'no label', 'srt': 'no label', 'gebieden22': 'no label', 'concgebied': 'no label', 'concnaam': 'no label', });
lyr_Winkelgebieden.set('fieldLabels', {'id': 'no label', 'gebcode': 'inline label', 'gebnaam': 'header label', 'code': 'no label', 'oppha': 'no label', 'ivocode': 'no label', 'codewg16': 'no label', 'winkgeb14': 'no label', 'concgebied': 'no label', 'concnaam': 'no label', 'sd15': 'no label', 'bbgacode': 'no label', });
lyr_Parken.set('fieldLabels', {'_links': 'no label', '_display': 'no label', 'sleutelverzendend': 'no label', 'openbare_ruimte_identificatie': 'no label', 'openbare_ruimte_code': 'no label', 'date_modified': 'no label', 'document_mutatie': 'no label', 'document_nummer': 'no label', 'begin_geldigheid': 'no label', 'einde_geldigheid': 'no label', 'mutatie_gebruiker': 'no label', 'status': 'no label', 'bron': 'no label', 'type': 'no label', 'naam': 'header label', 'naam_17_posities': 'no label', 'naam_24_posities': 'no label', 'straat_nummer': 'no label', 'woonplaats': 'no label', 'adressen': 'no label', 'dataset': 'inline label', });
lyr_Woongebieden.set('fieldLabels', {'woontype': 'header label', 'pid': 'no label', });
lyr_Rayons.set('fieldLabels', {'id': 'no label', 'naam': 'header label', 'sd2015': 'no label', 'rayon15': 'inline label', });
