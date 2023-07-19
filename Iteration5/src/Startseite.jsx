import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Startseite() {
  return (
    <div className="content">
      <h2 className="Überschrifth2">Willkommen auf der Startseite!</h2>
      <br />
      <br />
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <Link to="Artikel/1" className="card">
                <img
                  src="./img/Artikel Fotos/Artikel 1.jpeg"
                  alt="Profilbild von Armo"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Die Gerüchte Küche brodelt: GTA 6 noch vor dem{" "}
                    <time>17. Mai 2023?</time>
                  </h5>
                  <p className="card-text">Autor: Armo</p>
                  <p className="card-text">
                    Veröffentlichungsdatum: 24.04.2023
                  </p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="Artikel/2" className="card">
                <img
                  src="./img/Artikel Fotos/Super Saiyajin Blue - Budokai Tenkaichi.png"
                  alt="Hauptbild Dragon Ball"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Das neue Dragon Ball Z Budokai Tenkaichi 4: Nach 16 Jahren
                    folgen endlich wieder Prügeleien
                  </h5>
                  <p className="card-text">Autor: Racix</p>
                  <p className="card-text">
                    Veröffentlichungsdatum: 06.03.2023
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startseite;
