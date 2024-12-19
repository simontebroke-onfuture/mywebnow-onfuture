import "./AGB.css";

function Impressum() {
  return (
    <>
      <div className="agbContainer">
        <p className="agbHeading">Impressum</p>
        <div className="textContainer">
          <div className="languageButton langButtonPrivacy">
            <p className="language">German</p>
            <img src="/arrowdown.svg" alt="" />
          </div>
          <div className="agbTextBlockContainer">
            <div className="agbTextBlock agbTextBlockFirstChild agb22">
              <p className="agbParagraph">Daten</p>
              <p className="agbText mb">
                <span>Mywebnow</span>
                <br />
                Betrieben durch{" "}
                <a href="https://www.onfuture.de" className="blueLink">
                  Onfuture
                </a>
                <br />
                Konrad Zuse Straße 4
                <br />
                46397 Bocholt
              </p>
              <p className="agbText mb">
                <span>Kontakt</span>
                <br />

                <a href="tel:+15734729666" className="blueLink">
                  0157 3472 9666
                </a>
                <br />
                <a href="mailto:info@mywebnow.de" className="blueLink">
                  info@mywebnow.de
                </a>
              </p>
              <p className="agbText">
                Vertreten durch:
                <br />
                <a href="https://www.onfuture.de" className="blueLink">
                  Onfuture
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impressum;
