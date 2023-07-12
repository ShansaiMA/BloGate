import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      {/* HTML-Inhalt für den Header */}
      <h1>Meine Website</h1>
      <nav className="navigation">
        <ul className="nav_links">
          <li><a href="/">Startseite</a></li>
          <li><a href="/artikel">Artikel</a></li>
          <li><a href="/favoriten">Favoriten</a></li>
          <li><a href="/impressum">Impressum</a></li>
          <li><a className="csa" href="/kontakt">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

