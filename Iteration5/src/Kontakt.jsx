// Kontakt.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function Kontakt() {
  return (
    <Container>
      <div className='content card'>
        <h1 className='Überschrifth1'>Kontakt</h1>
        <form>
          <fieldset>
            <Row>
              <Col>
                <label htmlFor="vorname">Vorname</label>
                </Col>
                <Col>
                <input type="text" id="vorname" name="vorname" placeholder="Vorname" maxLength="40" pattern="[a-zA-Z]{2,}" />
              </Col>
              </Row>
              <Row>
              <Col>
                <label htmlFor="nachname">Nachname</label>
                </Col>
                <Col>
                <input type="text" id="nachname" name="nachname" placeholder="Nachname" maxLength="40" pattern="[a-zA-Z]{2,}" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="email">E-Mail-Adresse*</label>
                </Col>
                <Col>
                <input type="email" id="email" name="email" placeholder="E-Mail" maxLength="40" required />
              </Col>
              </Row>
              <Row>
              <Col>
                <label htmlFor="artikelnummer">Artikelnummer</label>
                </Col>
                <Col>
                <input type="text" id="artikelnummer" name="artikelnummer" placeholder="Artikelnummer" pattern="[a-z]{3}|\d{3}(?:\d{5}|p)|[0-9]{2}p\d{5}" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="betreff">Betreff*</label>
                </Col><Col>
                <input type="text" id="betreff" name="betreff" placeholder="Betreff" maxLength="40" required />
              </Col>
              </Row>
              <Row>
              <Col>
                <label htmlFor="kategorie">Kategorie</label>
                </Col> 
                <Col>
                <select id="kategorie" name="kategorie">
                  <option value="">Bitte auswählen</option>
                  <option value="kategorie1">Allgemein</option>
                  <option value="kategorie2">Profil</option>
                  <option value="kategorie3">Fehlermeldung</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="beschreibung">Beschreibung*</label>
                </Col> <Col>
                <textarea id="beschreibung" name="beschreibung" placeholder="Beschreibung" rows="15" cols="40" maxLength="400" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <em>* Pflichtfelder</em>
              </Col>
            </Row>
          </fieldset>
          <fieldset>
            <div>
              <button type="reset">Formular löschen</button>
              <button type="submit">Senden</button>
            </div>
          </fieldset>
        </form>
      </div>
    </Container>
  );
}

export default Kontakt;
