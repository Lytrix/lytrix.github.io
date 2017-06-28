var size = 0;
function categories_BedrijventerreinenWerkgebieden0(feature, value, size) {
                switch(value) {case 'b':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.51)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(214,233,90,0.51)'})
    })];
                    break;
case 'B':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.51)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(94,232,140,0.51)'})
    })];
                    break;
case 'k':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.51)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,44,206,0.51)'})
    })];
                    break;
case 'K':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.51)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(87,150,228,0.51)'})
    })];
                    break;}};
var styleCache_BedrijventerreinenWerkgebieden0={}
var style_BedrijventerreinenWerkgebieden0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("srt");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = categories_BedrijventerreinenWerkgebieden0(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_BedrijventerreinenWerkgebieden0[key]){
        var text = new ol.style.Text({
                font: '13.0px \'Corbel\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_BedrijventerreinenWerkgebieden0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_BedrijventerreinenWerkgebieden0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};