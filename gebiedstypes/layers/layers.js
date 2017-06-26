var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Topografie',
    'type': 'base',
    source: new ol.source.XYZ({   
        url: 'https://t{1-4}.data.amsterdam.nl/topo_wm_zw/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_BedrijventerreinenWerkgebieden1 = new ol.format.GeoJSON();
var features_BedrijventerreinenWerkgebieden1 = format_BedrijventerreinenWerkgebieden1.readFeatures(json_BedrijventerreinenWerkgebieden1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BedrijventerreinenWerkgebieden1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BedrijventerreinenWerkgebieden1.addFeatures(features_BedrijventerreinenWerkgebieden1);var lyr_BedrijventerreinenWerkgebieden1 = new ol.layer.Vector({
                source:jsonSource_BedrijventerreinenWerkgebieden1, 
                style: style_BedrijventerreinenWerkgebieden1,
                title: 'Bedrijventerreinen/Werkgebieden<br />\
        <img src="styles/legend/BedrijventerreinenWerkgebieden1_0.png" /> Bedrijventerrein dienstverlenend<br />\
        <img src="styles/legend/BedrijventerreinenWerkgebieden1_1.png" /> Bedrijventerrein producerend<br />\
        <img src="styles/legend/BedrijventerreinenWerkgebieden1_2.png" /> werkgebied<br />\
        <img src="styles/legend/BedrijventerreinenWerkgebieden1_3.png" /> Werkgebied<br />'
            });var format_Winkelgebieden2 = new ol.format.GeoJSON();
var features_Winkelgebieden2 = format_Winkelgebieden2.readFeatures(json_Winkelgebieden2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Winkelgebieden2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Winkelgebieden2.addFeatures(features_Winkelgebieden2);var lyr_Winkelgebieden2 = new ol.layer.Vector({
                source:jsonSource_Winkelgebieden2, 
                style: style_Winkelgebieden2,
                title: '<img src="styles/legend/Winkelgebieden2.png" /> Winkelgebieden'
            });var format_Parken3 = new ol.format.GeoJSON();
var features_Parken3 = format_Parken3.readFeatures(json_Parken3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parken3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Parken3.addFeatures(features_Parken3);var lyr_Parken3 = new ol.layer.Vector({
                source:jsonSource_Parken3, 
                style: style_Parken3,
                title: '<img src="styles/legend/Parken3.png" /> Parken'
            });var format_Woongebieden4 = new ol.format.GeoJSON();
var features_Woongebieden4 = format_Woongebieden4.readFeatures(json_Woongebieden4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Woongebieden4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Woongebieden4.addFeatures(features_Woongebieden4);var lyr_Woongebieden4 = new ol.layer.Vector({
                source:jsonSource_Woongebieden4, 
                style: style_Woongebieden4,
                title: 'Woongebieden<br />\
        <img src="styles/legend/Woongebieden4_0.png" /> Gestapelde laagbouw<br />\
        <img src="styles/legend/Woongebieden4_1.png" /> Grondgebonden woning<br />\
        <img src="styles/legend/Woongebieden4_2.png" /> Hoogbouw<br />'
            });var format_Rayons5 = new ol.format.GeoJSON();
var features_Rayons5 = format_Rayons5.readFeatures(json_Rayons5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rayons5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rayons5.addFeatures(features_Rayons5);var lyr_Rayons5 = new ol.layer.Vector({
                source:jsonSource_Rayons5, 
                style: style_Rayons5,
                title: '<img src="styles/legend/Rayons5.png" /> Rayons'
            });

lyr_BedrijventerreinenWerkgebieden1.setVisible(true);lyr_Winkelgebieden2.setVisible(true);lyr_Parken3.setVisible(true);lyr_Woongebieden4.setVisible(true);lyr_Rayons5.setVisible(true);
var layersList = [baseLayer,lyr_BedrijventerreinenWerkgebieden1,lyr_Winkelgebieden2,lyr_Parken3,lyr_Woongebieden4,lyr_Rayons5];
lyr_BedrijventerreinenWerkgebieden1.set('fieldAliases', {'bbga_code': 'bbga_code', 'id': 'id', 'lokatie': 'lokatie', 'naam': 'naam', 'opp': 'opp', 'beschikbaa': 'beschikbaa', 'uitgifte': 'uitgifte', 'nota': 'nota', 'oppmi': 'oppmi', 'soort': 'soort', 'lokuitgift': 'lokuitgift', 'srt': 'srt', 'gebieden22': 'gebieden22', 'concgebied': 'concgebied', 'concnaam': 'concnaam', });
lyr_Winkelgebieden2.set('fieldAliases', {'id': 'id', 'gebcode': 'gebcode', 'gebnaam': 'gebnaam', 'code': 'code', 'oppha': 'oppha', 'ivocode': 'ivocode', 'codewg16': 'codewg16', 'winkgeb14': 'winkgeb14', 'concgebied': 'concgebied', 'concnaam': 'concnaam', 'sd15': 'sd15', 'bbgacode': 'bbgacode', });
lyr_Parken3.set('fieldAliases', {'_links': '_links', '_display': '_display', 'sleutelverzendend': 'sleutelverzendend', 'openbare_ruimte_identificatie': 'openbare_ruimte_identificatie', 'openbare_ruimte_code': 'openbare_ruimte_code', 'date_modified': 'date_modified', 'document_mutatie': 'document_mutatie', 'document_nummer': 'document_nummer', 'begin_geldigheid': 'begin_geldigheid', 'einde_geldigheid': 'einde_geldigheid', 'mutatie_gebruiker': 'mutatie_gebruiker', 'status': 'status', 'bron': 'bron', 'type': 'type', 'naam': 'naam', 'naam_17_posities': 'naam_17_posities', 'naam_24_posities': 'naam_24_posities', 'straat_nummer': 'straat_nummer', 'woonplaats': 'woonplaats', 'adressen': 'adressen', 'dataset': 'dataset', });
lyr_Woongebieden4.set('fieldAliases', {'woontype': 'woontype', 'pid': 'pid', });
lyr_Rayons5.set('fieldAliases', {'id': 'id', 'naam': 'naam', 'sd2015': 'sd2015', 'rayon15': 'rayon15', });
lyr_BedrijventerreinenWerkgebieden1.set('fieldImages', {'bbga_code': 'TextEdit', 'id': 'TextEdit', 'lokatie': 'TextEdit', 'naam': 'TextEdit', 'opp': 'TextEdit', 'beschikbaa': 'TextEdit', 'uitgifte': 'TextEdit', 'nota': 'TextEdit', 'oppmi': 'TextEdit', 'soort': 'TextEdit', 'lokuitgift': 'TextEdit', 'srt': 'TextEdit', 'gebieden22': 'TextEdit', 'concgebied': 'TextEdit', 'concnaam': 'TextEdit', });
lyr_Winkelgebieden2.set('fieldImages', {'id': 'TextEdit', 'gebcode': 'TextEdit', 'gebnaam': 'TextEdit', 'code': 'TextEdit', 'oppha': 'TextEdit', 'ivocode': 'TextEdit', 'codewg16': 'TextEdit', 'winkgeb14': 'TextEdit', 'concgebied': 'TextEdit', 'concnaam': 'TextEdit', 'sd15': 'TextEdit', 'bbgacode': 'TextEdit', });
lyr_Parken3.set('fieldImages', {'_links': 'TextEdit', '_display': 'TextEdit', 'sleutelverzendend': 'TextEdit', 'openbare_ruimte_identificatie': 'TextEdit', 'openbare_ruimte_code': 'TextEdit', 'date_modified': 'TextEdit', 'document_mutatie': 'TextEdit', 'document_nummer': 'TextEdit', 'begin_geldigheid': 'TextEdit', 'einde_geldigheid': 'TextEdit', 'mutatie_gebruiker': 'TextEdit', 'status': 'TextEdit', 'bron': 'TextEdit', 'type': 'TextEdit', 'naam': 'TextEdit', 'naam_17_posities': 'TextEdit', 'naam_24_posities': 'TextEdit', 'straat_nummer': 'TextEdit', 'woonplaats': 'TextEdit', 'adressen': 'TextEdit', 'dataset': 'TextEdit', });
lyr_Woongebieden4.set('fieldImages', {'woontype': 'TextEdit', 'pid': 'TextEdit', });
lyr_Rayons5.set('fieldImages', {'id': 'TextEdit', 'naam': 'TextEdit', 'sd2015': 'TextEdit', 'rayon15': 'TextEdit', });
lyr_BedrijventerreinenWerkgebieden1.set('fieldLabels', {'bbga_code': 'no label', 'id': 'no label', 'lokatie': 'no label', 'naam': 'no label', 'opp': 'no label', 'beschikbaa': 'no label', 'uitgifte': 'no label', 'nota': 'no label', 'oppmi': 'no label', 'soort': 'no label', 'lokuitgift': 'no label', 'srt': 'no label', 'gebieden22': 'no label', 'concgebied': 'no label', 'concnaam': 'no label', });
lyr_Winkelgebieden2.set('fieldLabels', {'id': 'no label', 'gebcode': 'no label', 'gebnaam': 'no label', 'code': 'no label', 'oppha': 'no label', 'ivocode': 'no label', 'codewg16': 'no label', 'winkgeb14': 'no label', 'concgebied': 'no label', 'concnaam': 'no label', 'sd15': 'no label', 'bbgacode': 'no label', });
lyr_Parken3.set('fieldLabels', {'_links': 'no label', '_display': 'no label', 'sleutelverzendend': 'no label', 'openbare_ruimte_identificatie': 'no label', 'openbare_ruimte_code': 'no label', 'date_modified': 'no label', 'document_mutatie': 'no label', 'document_nummer': 'no label', 'begin_geldigheid': 'no label', 'einde_geldigheid': 'no label', 'mutatie_gebruiker': 'no label', 'status': 'no label', 'bron': 'no label', 'type': 'no label', 'naam': 'no label', 'naam_17_posities': 'no label', 'naam_24_posities': 'no label', 'straat_nummer': 'no label', 'woonplaats': 'no label', 'adressen': 'no label', 'dataset': 'no label', });
lyr_Woongebieden4.set('fieldLabels', {'woontype': 'no label', 'pid': 'no label', });
lyr_Rayons5.set('fieldLabels', {'id': 'no label', 'naam': 'no label', 'sd2015': 'no label', 'rayon15': 'no label', });
lyr_Rayons5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});