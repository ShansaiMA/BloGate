import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

function Kontakt() {
  return (
    <Container>
      <div className='content card'>
        <h1 className='Überschrifth1'>Kontakt</h1>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Vorname</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" id="vorname" name="vorname" placeholder="Vorname" maxLength="40" pattern="[a-zA-Z]{2,}" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Nachname</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" id="nachname" name="nachname" placeholder="Nachname" maxLength="40" pattern="[a-zA-Z]{2,}" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>E-Mail-Adresse*</Form.Label>
            <Col sm={9}>
              <Form.Control type="email" id="email" name="email" placeholder="E-Mail" maxLength="40" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Artikelnummer</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" id="artikelnummer" name="artikelnummer" placeholder="Artikelnummer" pattern="[a-z]{3}|\d{3}(?:\d{5}|p)|[0-9]{2}p\d{5}" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Betreff*</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" id="betreff" name="betreff" placeholder="Betreff" maxLength="40" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Kategorie</Form.Label>
            <Col sm={9}>
              <Form.Control as="select" id="kategorie" name="kategorie">
                <option value="">Bitte auswählen</option>
                <option value="kategorie1">Allgemein</option>
                <option value="kategorie2">Profil</option>
                <option value="kategorie3">Fehlermeldung</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Beschreibung*</Form.Label>
            <Col sm={9}>
              <Form.Control as="textarea" id="beschreibung" name="beschreibung" placeholder="Beschreibung" rows="15" maxLength="400" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <em>* Pflichtfelder</em>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Button variant="danger" type="reset">Formular löschen</Button>{' '}
              <Button variant= "primary" type="submit">Senden</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default Kontakt;
