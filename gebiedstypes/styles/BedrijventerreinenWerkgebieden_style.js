var size = 0;
function categories_BedrijventerreinenWerkgebieden(feature, value) {
                switch(value) {case "b":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.51)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(214,233,90,0.51)"})
    })];
                    break;
case "B":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.51)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(94,232,140,0.51)"})
    })];
                    break;
case "k":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.51)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(166,44,206,0.51)"})
    })];
                    break;
case "K":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.51)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(87,150,228,0.51)"})
    })];
                    break;}};
var styleCache_BedrijventerreinenWerkgebieden={}
var style_BedrijventerreinenWerkgebieden = function(feature, resolution){
    var value = feature.get("srt");
    var style = categories_BedrijventerreinenWerkgebieden(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_BedrijventerreinenWerkgebieden[key]){
        var text = new ol.style.Text({
              font: '13.0px \'Corbel\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 0
              }),
            });
        styleCache_BedrijventerreinenWerkgebieden[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_BedrijventerreinenWerkgebieden[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};