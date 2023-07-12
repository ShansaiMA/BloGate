import React from 'react';
import './App.css';


function Kontakt() {
  return (
    <div>
      {/* HTML-Inhalt für die Kontakt-Seite */}
      <h2>Kontakt</h2>
      <form>
          <fieldset>
            <table>
              <tr>
                <td><label htmlFor="vorname">Vorname</label></td>
                <td><input type="text" id="vorname" name="vorname" placeholder="Vorname" maxLength="40" pattern="[a-zA-Z]{2,}" /></td>
              </tr>
              <tr>
                <td><label htmlFor="nachname">Nachname</label></td>
                <td><input type="text" id="nachname" name="nachname" placeholder="Nachname" maxLength="40" pattern="[a-zA-Z]{2,}" /></td>
              </tr>
              <tr>
                <td><label htmlFor="email">E-Mail-Adresse*</label></td>
                <td><input type="email" id="email" name="email" placeholder="E-Mail" maxLength="40" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="artikelnummer">Artikelnummer</label></td>
                <td><input type="text" id="artikelnummer" name="artikelnummer" placeholder="Artikelnummer" pattern="[a-z]{3}|\d{3}(?:\d{5}|p)|[0-9]{2}p\d{5}" /></td>
              </tr>
              <tr>
                <td><label htmlFor="betreff">Betreff*</label></td>
                <td><input type="text" id="betreff" name="betreff" placeholder="Betreff" maxLength="40" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="kategorie">Kategorie</label></td>
                <td>
                  <select id="kategorie" name="kategorie">
                    <option value="">Bitte auswählen</option>
                    <option value="kategorie1">Allgemein</option>
                    <option value="kategorie2">Profil</option>
                    <option value="kategorie3">Fehlermeldung</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="beschreibung">Beschreibung*</label></td>
                <td><textarea id="beschreibung" name="beschreibung" placeholder="Beschreibung" rows="15" cols="40" maxLength="400" required /></td>
              </tr>
              <tr>
                <td><em>* Pflichtfelder</em></td>
              </tr>
            </table>
          </fieldset>
          <fieldset>
            <div>
              <button type="reset">Formular löschen</button>
              <button type="submit">Senden</button>
            </div>
          </fieldset>
        </form>
    </div>
  );
}

export default Kontakt;