var size = 0;
function categories_Woongebieden4(feature, value, size) {
                switch(value) {case 'Gestapelde laagbouw':
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(252,172,145,0.8)'})
    })];
                    break;
case 'Grondgebonden woning':
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(252,112,80,0.8)'})
    })];
                    break;
case 'Hoogbouw':
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(159,0,13,0.8)'})
    })];
                    break;}};
var styleCache_Woongebieden4={}
var style_Woongebieden4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("woontype");
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
    var style = categories_Woongebieden4(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_Woongebieden4[key]){
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
        styleCache_Woongebieden4[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Woongebieden4[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};