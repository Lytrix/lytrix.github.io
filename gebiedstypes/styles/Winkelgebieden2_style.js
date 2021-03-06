var size = 0;

var styleCache_Winkelgebieden2={}
var style_Winkelgebieden2 = function(feature, resolution){
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
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(210,40,108,0.5)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_Winkelgebieden2[key]){
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
        styleCache_Winkelgebieden2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Winkelgebieden2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};