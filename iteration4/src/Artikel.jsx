import React from 'react';
import { useParams } from 'react-router-dom';

function Artikel() {
    const { id } = useParams();


 // Hier kannst du den Inhalt des Artikels basierend auf der `id` anzeigen

  return (
    <div>
      <h2>Artikel {id}</h2>
      {/* Zeige den entsprechenden Inhalt des Artikels an */}
    </div>
  );
}

export default Artikel;