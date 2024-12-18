import "./SectionOne.css";

function SectionOne() {
  return (
    <div className="sectionOne">
      <h1 className="heading">Nie war es einfacher, online perfekt zu sein.</h1>
      <div className="topGridContainer">
        <div className="gridItem i1">
          <p className="text1">Schreiben</p>
          <p className="text2">
            Schreibe uns, wie mit einem Freund von wo du willst.
          </p>
        </div>
        <div className="gridItem i2">
          <p className="text1">Wählen</p>
          <p className="text2">
            Suche dir ein Paket aus. Wir kümmern uns um den Rest.
          </p>
        </div>
        <div className="gridItem i3">
          <p className="text1">Live</p>
          <p className="text2">
            In 5 Tagen ist deine Webseite online & du bleibst zu jederzeit up to
            date.
          </p>
        </div>
      </div>
      <div className="informationContainer">
        <img src="/arrowgray.svg" alt="^" />
        <p className="itemInformation">
          Deine Webseite & Domain werden vollständig von uns gehostet – sicher,
          DSGVO-konform & zuverlässig, unterstützt durch die bewährte
          Infrastruktur von IONOS.
        </p>
      </div>
      <h1 className="heading quote">
        “Unsere intelligente Technologie und unser Fokus auf Design machen
        professionelle Webseiten schnell, einfach und für jeden zugänglich.”
      </h1>
      <p className="author">Innovation & Technology Team, mywebnow</p>
    </div>
  );
}

export default SectionOne;
