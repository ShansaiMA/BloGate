import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Artikel() {
  const { id } = useParams();


  // Hier kannst du den Inhalt des Artikels basierend auf der `id` anzeigen

  return (
    <div>
      <h1 className='Überschrifth1'>Artikel {id}</h1>
      {/* Zeige den entsprechenden Inhalt des Artikels an */}
    </div>
  );
}

export default Artikel;