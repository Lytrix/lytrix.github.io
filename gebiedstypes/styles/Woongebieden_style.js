var size = 0;
function categories_Woongebieden(feature, value) {
                switch(value) {case "Gestapelde laagbouw":
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(252,172,145,0.8)"})
    })];
                    break;
case "Grondgebonden woning":
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(252,112,80,0.8)"})
    })];
                    break;
case "Hoogbouw":
                    return [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(159,0,13,0.8)"})
    })];
                    break;}};
var styleCache_Woongebieden={}
var style_Woongebieden = function(feature, resolution){
    var value = feature.get("woontype");
    var style = categories_Woongebieden(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Woongebieden[key]){
        var text = new ol.style.Text({
              font: '16.9px \'.SF NS Text\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_Woongebieden[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Woongebieden[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};