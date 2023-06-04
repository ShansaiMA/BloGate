function zuFavoritenHinzufuegen(aritkel) {
  //versuchen, das Favoriten-Array aus dem LocalStorage lesen
  const favoriten = JSON.parse(localStorage.getItem("favoriten"));

  // Falls das Fav.Array exisitiert, dann ...
  if (favoriten) {
    //Artikel zu Favoriten hinzufügen
    favoriten.push(artikel);
    //das aktualisierte Favoriten-Array in localStorage speichern
    localStorage.setItem("favoriten", JSON.stringify(favoriten));

    // Ansonsten, wenn das Favoriten-Array noch nicht angelegt wurde, dann ...
  } else {
    //Artikel in ein neues Array einfügen und das neu erzeugte Favoriten-Array bilden
    // Im Local-storage unter dem Schlüssel 'favoriten' speichern
    localStorage.setItem("favoriten", JSON.stringify([artikel]));
  }
}
