function randomPalette(){
  //document.getElementById("color1").style.backgroundColor = "lightblue";
  //document.getElementById("color2").style.elementText = "#000000";
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var valorInicial = getRandomArbitrary(0,360);
  var color = valorInicial;
  var colores = [color];
  for (i=2;i<=5;i++){
    if (i == 2){
        var numeroComplementario = valorInicial+75;
    }else{
        var numeroComplementario = numeroComplementario +75;
    }
    if (numeroComplementario < 360){
      var color = numeroComplementario;
    }else{
      var numeroComplementario = numeroComplementario-360;
      var color = numeroComplementario;
    }
    colores.push(color);

  }
  siguiente = generateRules(colores);
}

function generateRules(params){
  for (i = 0; i < params.length; i++) {

       var grado = params[i] / 360;
       traduccion =  hsvToRgb(grado, 1, 1 );
       var hexa = rgbToHex(Math.round(traduccion[0]), Math.round(traduccion[1]), Math.round(traduccion[2]));

       if (i ==0){
         var elemento0 = ".website-background{ background-color: "+ hexa +" ;}";
         document.getElementById("color1").style.backgroundColor = hexa;
       }else if (i == 1){
         var elemento1 = ".element-text{ color: "+ hexa +" ;}";
         document.getElementById("color2").style.color = hexa;
       }else if (i == 2){
         var elemento2 = ".element-text{ color: "+ hexa +" ;}";
         document.getElementById("color3").style.borderColor = hexa;
       }else if (i == 3){
         var elemento3 = ".element-text{ color: "+ hexa +" ;}";
         document.getElementById("color4").style.backgroundColor = hexa;
       }else if (i == 4){
         var elemento4 = ".element-text{ color: "+ hexa +" ;}";
         document.getElementById("color5").style.color = hexa;
       }
   }
  document.getElementById("css-rules").value = elemento0.concat(elemento1,elemento2,elemento3,elemento4);

}

function limpiarPaleta() {

    document.getElementById("css-rules").value =".website-background{ color: #FFFFFF;}"+
    ".element-text{ color: #FFFFFF;}"+
    ".element-border{ border-color: #FFFFFF;}"+
    ".element-background{ background-color: #FFFFFF;}"+
    ".header{ color: #FFFFFF;}";
    document.getElementById("color1").style.backgroundColor = "#FFFFFF";
    document.getElementById("color2").style.color =  "#000000";
    document.getElementById("color3").style.borderColor =  "#000000";
    document.getElementById("color4").style.backgroundColor =  "#FFFFFF";
    document.getElementById("color5").style.color =  "#000000";
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
