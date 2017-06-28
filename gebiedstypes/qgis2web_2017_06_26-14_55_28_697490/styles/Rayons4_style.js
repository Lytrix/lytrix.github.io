var size = 0;

var styleCache_Rayons4={}
var style_Rayons4 = function(feature, resolution){
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
        stroke: new ol.style.Stroke({color: 'rgba(227,0,3,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })];
    key = value + "_" + labelText
    if (!styleCache_Rayons4[key]){
        var text = new ol.style.Text({
                font: '16.9px \'.SF NS Text\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Rayons4[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Rayons4[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};