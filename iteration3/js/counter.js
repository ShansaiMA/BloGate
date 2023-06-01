//ändern
var kommentarTextfeld = document.getElementById("kommentar");
 var zaehler = document.getElementById("zaehler");
 
 kommentarTextfeld.addEventListener("input", function() {
   var eingegebenerText = kommentarTextfeld.value;
   var zeichenAnzahl = eingegebenerText.length;
   zaehler.innerText = zeichenAnzahl;
 });