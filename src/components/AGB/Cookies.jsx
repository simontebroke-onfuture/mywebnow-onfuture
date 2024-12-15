import "./AGB.css";

function Cookies() {
  return (
    <>
      <div className="agbContainer">
        <p className="updatedDate">Aktualisiert am: 4. November 2024</p>
        <p className="agbHeading">Cookies- und Nutzungsrichtlinien</p>
        <div className="textContainer">
          <div className="languageButton langButtonPrivacy">
            <p className="language">German</p>
            <img src="/arrowdown.svg" alt="" />
          </div>
          <div className="agbTextBlockContainer">
            <div className="agbTextBlock agbTextBlockFirstChild">
              <p className="agbParagraph">1. Verwendung von Cookies</p>
              <p className="agbText">
                Unsere Webseite verwendet Cookies, um die Benutzererfahrung zu
                verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät
                gespeichert werden und Informationen zu Ihrem Besuch speichern.
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">2. Arten von Cookies</p>
              <p className="agbText">
                <ol className="userDataList">
                  <span>
                    <li>
                      Notwendige Cookies:{" "}
                      <span className="originSpan">
                        Diese Cookies sind erforderlich, damit die Webseite
                        funktioniert.
                      </span>
                    </li>
                  </span>
                  <span>
                    <li>
                      Analyse-Cookies:{" "}
                      <span className="originSpan">
                        Diese Cookies helfen uns, die Nutzung unserer Webseite
                        zu verstehen und zu optimieren.
                      </span>
                    </li>
                  </span>
                </ol>
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">3. Einwilligung und Einstellungen</p>
              <p className="agbText">
                Beim ersten Besuch der Webseite können Sie über das
                Cookie-Banner entscheiden, welche Cookies verwendet werden
                dürfen. Sie können Ihre Präferenzen jederzeit über den
                „Cookie-Einstellungen“-Button ändern.
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">4. Nutzung der Plattform</p>
              <p className="agbText">
                Unsere Webseite dient ausschließlich der
                Informationsbereitstellung und Kontaktaufnahme. Bei der
                Kontaktaufnahme über externe Plattformen (z. B. WhatsApp,
                Instagram) erfolgt die Datenübertragung auf eigenes Risiko des
                Nutzers. MyWebNow hat keinen Einfluss auf die
                Sicherheitsmaßnahmen dieser Plattformen.
              </p>
            </div>
            <div className="agbTextBlock agbLastChildBlock">
              <p className="agbParagraph">5. Kontakt bei Fragen zu Cookies</p>
              <p className="agbText">
                Bitte richten Sie Fragen zur Verwendung von Cookies an: <br />
                <span>Mywebnow </span>
                <br />
                E-Mail-Adresse: info@mywebnow.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cookies;
