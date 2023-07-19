import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Artikel1Daten from "../src/properties/Artikel1Daten";
import Artikel2Daten from "../src/properties/Artikel2Daten";

const Artikel = ({ addToFavoriten }) => {
  const { id } = useParams();

  const [isFavorit, setIsFavorit] = useState(false);

  let articleData;
  if (id === "1") {
    articleData = Artikel1Daten;
  } else if (id === "2") {
    articleData = Artikel2Daten;
  }

  const handleFavoritenClick = () => {
    console.log("handleFavoritenClick wurde aufgerufen");
    if (addToFavoriten) {
      addToFavoriten({
        id,
        titel: articleData.titel,
        autor: articleData.autor,
        bild_url: articleData.bild_url,
        datum: articleData.datum,
      });
      setIsFavorit(true);
      console.log("Artikel wurde zu Favoriten hinzugefügt:", {
        id,
        titel: articleData.titel,
        autor: articleData.autor,
        bild_url: articleData.bild_url,
        datum: articleData.datum,
      });
    }
  };

  const handleFavoritRemove = () => {
    setIsFavorit(false);
  };

  return (
    <div>
      {articleData ? (
        <div>
          <p>{articleData.content}</p>
          {isFavorit ? (
            <button
              className="button"
              onClick={handleFavoritRemove}
              id="Favoritenbutton"
            >
              Artikel ist ein Favorit
            </button>
          ) : (
            <button
              className="button"
              onClick={handleFavoritenClick} // Überprüfen Sie, ob der Button diese Funktion aufruft
              id="Favoritenbutton"
            >
              Zu Favoriten hinzufügen
            </button>
          )}
        </div>
      ) : (
        <p>Artikel nicht gefunden</p>
      )}
    </div>
  );
};

export default Artikel;
