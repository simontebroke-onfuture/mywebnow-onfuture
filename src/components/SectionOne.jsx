import "./SectionOne.css";

function SectionOne() {
  return (
    <div className="sectionOne">
      <h1 className="heading">Teams do more, faster with ChatGPT</h1>
      <div className="topGridContainer">
        <div className="gridItem i1">
          <p className="text1">Wählen</p>
          <p className="text2">Finde deinen Stil</p>
        </div>
        <div className="gridItem i2">
          <p className="text1">Kontaktieren</p>
          <p className="text2">Schreib uns direkt</p>
        </div>
        <div className="gridItem i3">
          <p className="text1">Live</p>
          <p className="text2">Deine Webseite ist Online</p>
        </div>
      </div>
      <div className="informationContainer">
        <img src="/arrowgray.svg" alt="^" />
        <p className="itemInformation">
          Von der Designauswahl bis zur fertigen Webseite – wir übernehmen
          alles, schnell, einfach und perfekt abgestimmt, damit du in wenigen
          Tagen online bist.
        </p>
      </div>
      <h1 className="heading quote">
        “Unsere Plattform ersetzt komplexe Abläufe und zeitaufwändige
        Entscheidungen durch eine schnelle und einfache Lösung für deine
        Webseite.”
      </h1>
      <p className="author">Innovation & Technology Team, mywebnow.de</p>
    </div>
  );
}

export default SectionOne;
