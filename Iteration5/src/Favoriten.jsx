import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Favoriten({ favoriten, removeFromFavoriten }) {
  console.log(favoriten);
  console.log(removeFromFavoriten);

  const handleFavoritRemove = (artikel) => {
    console.log('Artikel entfernen:', artikel);
    if (removeFromFavoriten) {
      removeFromFavoriten(artikel);
    }
  };

  return (
    <Container>
      <div className="content">
        <h2 className="Überschrifth2">Favoriten</h2>
        <Row>
          <Col className="col">
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
              <tbody>
                {favoriten.map((artikel) => (
                  <tr key={artikel.id}>
                    <td>{artikel.titel}</td>
                    <td>{artikel.autor}</td>
                    <td>
                      <img
                        src={artikel.bild_url}
                        alt="Bildvorschau"
                        style={{ maxWidth: '100px' }}
                      />
                    </td>
                    <td>{artikel.datum}</td>
                    <td>
                      <button
                        className="button"
                        type="button"
                        onClick={() => handleFavoritRemove(artikel)}
                      >
                        Löschen
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Favoriten;
