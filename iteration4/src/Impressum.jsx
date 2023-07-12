import React from 'react';
import './App.css';

function Impressum() {
  return (
    <div>
      {/* HTML-Inhalt für die Impressum-Seite */}
      <h2>Impressum</h2>
      <div id="content">
    <article>
      <h1>Impressum</h1>
    </article>


    <div className="autorenbox">
      <ul>
        <li>Name: Armend Ukzmaili</li>
        <li>Studiengang: E-Commerce</li>
        <li>Hochschule: HRW</li>
      </ul>
    </div>


    <div className="autorenbox">
      <ul>
        <li>Name: Shansai Mahendran</li>
        <li>Studiengang: E-Commerce</li>
        <li>Hochschule: HRW</li>
      </ul>
    </div>
  </div>
    </div>
  );
}

export default Impressum;