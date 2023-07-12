import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startseite from './Startseite';
import Artikel from './Artikel';
import Favoriten from './Favoriten';
import Impressum from './Impressum';
import Kontakt from './Kontakt';
import './App.css';

function MainView() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/artikel/:id" element={<Artikel />} />
          <Route path="/favoriten" element={<Favoriten />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default MainView;
