import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="nav_links">
          <li><a href="startseite.html">Startseite</a></li>
          <li><a href="favoriten.html">Favoriten</a></li>
          <li><a href="impressum.html">Impressum</a></li>
        </ul>
        <a className="csa" href="kontakt.html">Kontakt</a>
      </nav>
    </header> 
  );
}

export default Header;
