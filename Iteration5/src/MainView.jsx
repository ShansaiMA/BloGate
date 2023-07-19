import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startseite from "./Startseite";
import Artikel from "./Artikel";
import Favoriten from "./Favoriten";
import Impressum from "./Impressum";
import Kontakt from "./Kontakt";
import "./App.css";

function MainView() {
  const [favoriten, setFavoriten] = useState([]);

  const addToFavoriten = (artikel) => {
    setFavoriten((prevFavoriten) => {
      const isAlreadyAdded = prevFavoriten.find(
        (item) => item.id === artikel.id
      );

      if (!isAlreadyAdded) {
        return [...prevFavoriten, artikel];
      }

      return prevFavoriten;
    });
  };

  const removeFromFavoriten = (artikel) => {
    setFavoriten((prevFavoriten) =>
      prevFavoriten.filter((item) => item.id !== artikel.id)
    );
  };

  useEffect(() => {
    console.log("favoriten aktualisiert:", favoriten);
  }, [favoriten]);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route
            path="/artikel/:id"
            element={<Artikel addToFavoriten={addToFavoriten} />}
          />
          <Route
            path="/favoriten"
            element={
              <Favoriten
                favoriten={favoriten}
                removeFromFavoriten={removeFromFavoriten}
              />
            }
          />

          <Route path="/impressum" element={<Impressum />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default MainView;
