
import Zeichenzähler from '../Zeichenzähler';
import Rating from '../Rating';

const Artikel2Daten = {
  
  content: 
  <div className="content">
  <br />
    <h1>Das neue Dragon Ball Z Budokai Tenkaichi 4: Nach 16 Jahren folgen endlich wieder Prügeleien</h1>
    <h4>Das warten hat ein Ende: Die Fortsetzung ist nun in aller Munde</h4>
    <p>Von <strong>Racix</strong> | <time>06.03.2023</time> | Durchschnittliche Lesezeit: 4 Min. | Kommentare (10)</p>
    <br />
    <br />
    <figure className="figurebild">
      <img src="../img/Artikel Fotos/Super Saiyajin Blue - Budokai Tenkaichi.png" height="450px" width="800px" alt="Das neue Dragonball Budokai Tenkaichi 4 Bild Teaser" />
      <figcaption>© Bandai Namco</figcaption>
      <br />
    </figure>
    <p>
      Das Warten hat endlich ein Ende, das neue Dragon Ball Z: Budokai Tenkaichi 4 wurde vor kurzem angekündigt. Seit 16 Jahren warten Fans auf die Fortsetzung der Budokai Tenkaichi Serie. <br />
      Fans der Bandai Namco Videospielserie haben nach langem Warten schon aufgegeben, doch dann gab es die Überraschung.
    </p>
    <p>
      Auf Twitter wurde dann ein Ankündigungs Trailer zum neuen Dragon Ball Spiel hochgeladen. Der Trailer weckt ein Gefühl von Nostalgie, indem Kampfausschnitte aus der alten Budokai Tenkaichi Reihe auf einem Röhrenfernseher abgebildet werden. Hierbei sorgen vor allem die alten Soundeffekte und die Voiceover für Gänsehaut. Das Highlight des Trailers ist jedoch das Ende. <br />
      Zu sehen ist der schreiende Son Goku. Son Goku brüllt hier aber nicht aus Spaß, der Grund ist die Verwandlung in den Super Saiyajin God Blue. Fans können sich also nun auf ein Powerup für die kommenden Prügeleien freuen. Da mehr als ein Jahrzehnt verstrichen ist, seitdem der letzte Teil der Reihe veröffentlicht wurde, können sich Fans auf einen vermutlich riesigen Sprung in Sachen Grafik und Effekte freuen. Zudem ist mit Charaktererweiterungen wie Goku Black bzw. Zamasu, Jiren, Master Beerus, Whis uvm. zu rechnen.
    </p>
    <strong>Autor:</strong> Racix <br />
    <figure className="figurebild">
      <img src="../img/Artikel Fotos/Black Goku.png" alt="PB Black Goku" width="100" />
      <br />
    </figure>
    <p>
      <strong>Kurzvita des Autors:</strong> Hallo Freunde! <br />
      bekannt bin ich hier bei BloGate unter dem Gamertag Racix. <br />
      Seit meiner Kindheit spiele ich schon immer Videospiele und habe seitdem niemals aufgehört, sie zu lieben. Die Gaming-Industrie begeisterte mich immer und immer wieder, woraufhin ich meine komplette Freizeit damit verbracht habe, alles über die Gaming-Welt zu lernen. Daher entschied ich mich, meine Liebe zu Gaming mit der Welt zu teilen und gegebenenfalls anderen Gamern Neugigkeiten und Wissen mitzuteilen.
    </p>
    <strong>Themenbereich:</strong> Dragon Ball Budokai Tenkaichi, Gaming, Anime, Bandai Namco <br />
    <br />
    <button className="button" id="Favoritenbutton">
      <span className="emojis">&#x2764;</span> Zu Favoriten hinzufügen
    </button>
    <br />
    <br />
    Anzahl Personen, die den Blog-Artikel zu ihrer Favoritenliste hinzugefügt haben: 4
    <br />
    <br />
    <form>
      <fieldset className="KommentarFormular">
        <legend>
          <h2>Sprich Dich aus</h2>
        </legend>
        <Rating/>
        <div>
          <label htmlFor="kommentar">
            <h3>Kommentar:</h3>
          </label>
          </div>
        <div>
          <Zeichenzähler/>
        </div>
        <div>
          <button className="button" type="submit">Speichern</button>
        </div>
      </fieldset>
    </form>
  </div>
};

export default Artikel2Daten;
