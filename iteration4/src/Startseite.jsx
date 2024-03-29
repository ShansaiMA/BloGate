import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Startseite() {
  return (
    <div className="content">
      <div>
        <h2 className="Überschrifth2">Willkommen auf der Startseite!</h2>
        <br />
        <br />
        <table className="artikel_tabelle">
          <thead>
            <tr>
              <th className="ÜberschriftenLeiste-tr">Artikelüberschrift</th>
              <th className="ÜberschriftenLeiste-tr">Autor</th>
              <th className="ÜberschriftenLeiste-tr">Bildvorschau</th>
              <th className="ÜberschriftenLeiste-tr">Veröffentlichungsdatum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="Artikel/1">
                  Die Gerüchte Küche brodelt: GTA 6 noch vor dem{" "}
                  <time>17. Mai 2023? </time>{" "}
                </Link>
              </td>
              <td>Armo</td>
              <td>
                <Link to="Artikel/1" target="_blank">
                  <img
                    src="./img/Artikel Fotos/Artikel 1.jpeg"
                    alt="Profilbild von Armo"
                    width="100"
                  />
                </Link>
              </td>
              <td>
                <time>24.04.2023</time>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="Artikel/2">
                  Das neue Dragon Ball Z Budokai Tenkaichi 4:
                  <br /> Nach 16 Jahren folgen endlich wieder Prügeleien
                </Link>
              </td>
              <td>Racix</td>
              <td>
                <Link to="Artikel/2" target="_blank">
                  <img
                    src="./img/Artikel Fotos/Super Saiyajin Blue - Budokai Tenkaichi.png"
                    alt="Hauptbild Dragon Ball"
                    width="100"
                  />
                </Link>
              </td>
              <td>
                <time>06.03.2023</time>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Startseite;
