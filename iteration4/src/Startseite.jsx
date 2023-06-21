import React from 'react';
import './App.css';

function Startseite() {
    return (
      <div id= "content">
        <br />
        <br />
        <table className="artikel_tabelle">
          <tr>
            <th className="ÜberschriftenLeiste-tr">Artikelüberschrift</th>
            <th className="ÜberschriftenLeiste-tr">Autor</th>
            <th className="ÜberschriftenLeiste-tr">Bildvorschau</th>
            <th className="ÜberschriftenLeiste-tr">Veröffentlichungsdatum</th>
          </tr>
          <tr>
            <td>
              <a href="artikel1.html">Die Gerüchte Küche brodelt: GTA 6 noch vor dem <time>17. Mai 2023? </time> </a>
            </td>
            <td>Armo</td>
            <td>
              <img
                src="../img/Artikel Fotos/Artikel 1.jpeg"
                alt="Profilbild von Armo"
                width="100"
              />
            </td>
            <td>
              <time>24.04.2023</time>
            </td>
          </tr>
          <tr>
            <td>
              <a href="artikel2.html">
                Das neue Dragon Ball Z Budokai Tenkaichi 4:<br /> Nach 16 Jahren folgen endlich wieder Prügeleien
              </a>
            </td>
            <td>Racix</td>
            <td>
              <img
                src="../img/Artikel Fotos/Super Saiyajin Blue - Budokai Tenkaichi.png"
                alt="Hauptbild Dragon Ball"
                width="100"
              />
            </td>
            <td>
              <time>06.03.2023</time>
            </td>
          </tr>
        </table>
      </div>
    );
  }

export default Startseite;