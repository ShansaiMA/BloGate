import React from 'react';
import './App.css';

function Favoriten() {
  return (

    <div className="content">
      <h2 className='Überschrifth2'> Favoriten </h2>

      <table className="artikel_tabelle">
        <thead>
          <tr>
            <th className="ÜberschriftenLeiste-tr">Artikelüberschrift</th>
            <th className="ÜberschriftenLeiste-tr">Autor</th>
            <th className="ÜberschriftenLeiste-tr">Bildvorschau</th>
            <th className="ÜberschriftenLeiste-tr">Veröffentlichungsdatum</th>
            <th className="ÜberschriftenLeiste-tr">Löschen</th>
          </tr>
        </thead>
        <tbody id="tbodyinhalt">

        </tbody>
      </table>


    </div>
  );
}

export default Favoriten;