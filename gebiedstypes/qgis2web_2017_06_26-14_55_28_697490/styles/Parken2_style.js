var size = 0;

var styleCache_Parken2={}
var style_Parken2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
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
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.51)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(56,177,59,0.51)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_Parken2[key]){
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
        styleCache_Parken2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Parken2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};