import React from 'react';
import './App.css';
import LogoBild from '/img/Transparentes Logo.png';

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <a href="/">
          <img src={LogoBild} alt="Logo der Webseite" width="300" />
        </a>
      </div>

      <nav className="navigation">
        <ul className="nav_links">

          <li><a href="/">Startseite</a></li>
          <li><a href="/artikel">Artikel</a></li>
          <li><a href="/favoriten">Favoriten</a></li>
          <li><a href="/impressum">Impressum</a></li>
        </ul>
        <div className='NavAll'>
          <ul className="nav_links2">
            <li><a className="csa" href="/Kontakt">Kontakt</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

