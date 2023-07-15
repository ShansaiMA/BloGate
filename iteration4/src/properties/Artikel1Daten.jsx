
import Zeichenzähler from '../Zeichenzähler';
import Rating from '../Rating';

const Artikel1Daten = {
  
  content: <div className="content">
  <h1>Die Gerüchte Küche brodelt: GTA 6 noch vor dem 17. Mai 2023?</h1>
  <h4>Hat das Warten ein Ende?</h4>
  Von <strong>Armo</strong> | <time>24.04.2023</time> |
  Durchschnittliche Lesezeit: 3 Min. | Kommentare (6)
  <br />
  <br />
  <figure className="figurebild">
    <img src="../img/Artikel Fotos/Artikel 1.jpeg" height="450px" width="800px" />
    <figcaption>© GTA 6 - Design</figcaption>
    
  </figure>
  <article>
    <p>
      Lang ist es her Gaming-Freunde, seit dem der erste Teil der Rockstar
      Games Reihe GTA 5 veröffentlicht wurde, doch nun scheint Bewegung ins
      Spiel zu kommen. Die Frage nach einem neuen Teil der Rockstar Reihe
      spannt die Fans mittlerweile seit über 10 Jahren an. Laut aktuellen
      Gerüchten, sollen Leaks gefunden worden sein, welche auf eine
      Veröffentlichung gegen Ende des Jahres deuten. Ob dies jedoch stimmt,
      kann und wurde von seitens Rockstar Games nicht bestätigt, da trotz
      aller Leaks in letzter Zeit noch nix geschehen ist. Trotz dessen,
      fällt ein Datum seit längerem immer wieder auf die goldene Waage, der
      17. Mai 2023. Anscheinend findet ein Investoren Meeting der Publisher
      Two-Take in diesem Zeitraum statt, welche bekannt für ihre
      Tochtergesellschaften Rockstar Games und 2K Games sind. Ob dies etwas
      mit dem Release des sechsten Teils der Reihe zutuen haben bleibt dabei
      fraglich.
    </p>
  </article>
  <strong> Autor:</strong> Armo <br />
  <figure className="figurebild">
    <img src="../img/Artikel Fotos/Riley Freeman.jpg" alt="GTA 6" width="100" />
    <br />
  </figure>
  <p>
    <strong> Kurzvita des Autors:</strong>
    Ich heiße Armo und bin 20 Jahre alt. Momentan studiere ich das Modul
    E-Commerce an der HRW in Mülheim. Meine Wenigkeit stammt ursprünglich
    aus dem Kosovo, jedoch bin ich in Deutschland groß geworden und habe
    hier die Liebe zum Bloggen gefunden. Seitdem ich mich erinnern kann,
    begleiten mich Spielekonsolen, von der GameCube bis zur heutigen
    Playstation 5. In all diesen Jahren sammelte ich eine Menge an Wissen
    und schreibe dies in meinen Blogs nieder.
  </p>
  <strong> Themenbereich:</strong> Gaming, GTA 6, Leaks, Release <br />
  <br />
  <button className="button" id="Favoritenbutton">
    <span className="emojis">&#x2764;</span> Zu Favoriten hinzufügen
  </button>
  <p>Anzahl Personen, die den Blog-Artikel zu ihrer Favoritenliste hinzugefügt haben: 2</p>

 
  <form>
    <fieldset className="KommentarFormular">
      <legend>
        <h2>Sprich Dich aus</h2>
      </legend>
      <div>
        <Rating/>
      </div>

      <div>
        <label htmlFor="kommentar">
          <h3>Kommentar:</h3>
        </label>
        </div>
        <div>
          <Zeichenzähler/>
        </div>
        
      <div>
        <button className="button" type="submit">
          Speichern
        </button>
      </div>
    </fieldset>
  </form>
</div>
};

export default Artikel1Daten;
  





