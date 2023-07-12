import React from 'react';
import './App.css';

function Favoriten() {
  return (

    <div id="content">
    <h2 className='Überschrifth2'> Favoriten </h2>
    
    <table class="artikel_tabelle">
      <thead>
        <tr>
          <th class="ÜberschriftenLeiste-tr">Artikelüberschrift</th>
          <th class="ÜberschriftenLeiste-tr">Autor</th>
          <th class="ÜberschriftenLeiste-tr">Bildvorschau</th>
          <th class="ÜberschriftenLeiste-tr">Veröffentlichungsdatum</th>
          <th class="ÜberschriftenLeiste-tr">Löschen</th>
        </tr>
      </thead>
      <tbody id="tbodyinhalt">

      </tbody>
    </table>


  </div>
  );
}

export default Favoriten;