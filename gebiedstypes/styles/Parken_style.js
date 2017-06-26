var size = 0;

var styleCache_Parken={}
var style_Parken = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.51)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(56,177,59,0.51)"})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Parken[key]){
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
        styleCache_Parken[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Parken[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};