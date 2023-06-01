//ändern     

//Variablen deklarieren und auf die DOM-Elemente mit der ID "kommentar" und "zaheler" zugreifen
var kommentarTextfeld = document.getElementById("kommentar");
var zaehler = document.getElementById("zaehler");

// EventListener hinzugefügt, sodass auf Eingabe im Textfeld reagiert wird
kommentarTextfeld.addEventListener("input", function () {

  //eingegeben Text aus dem Textfeld abrufen
  var eingegebenerText = kommentarTextfeld.value;
  //Anzahl der Zeichen ermitteln
  var zeichenAnzahl = eingegebenerText.length;
  // Anzahl der Zeichen anzeigen
  zaehler.innerText = zeichenAnzahl;
});