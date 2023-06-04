//ändern     //VAR geändert zu Const, da COde best practice

//Variablen deklarieren und auf die DOM-Elemente mit der ID "kommentar" und "zaheler" zugreifen
const kommentarTextfeld = document.getElementById("kommentar");
const zaehler = document.getElementById("zaehler");

// EventListener hinzugefügt, sodass auf Eingabe im Textfeld reagiert wird
kommentarTextfeld.addEventListener("input", function () {
  //eingegeben Text aus dem Textfeld abrufen
  const eingegebenerText = kommentarTextfeld.value;
  //Anzahl der Zeichen ermitteln
  const zeichenAnzahl = eingegebenerText.length;
  // Anzahl der Zeichen anzeigen
  zaehler.innerText = zeichenAnzahl;
});
