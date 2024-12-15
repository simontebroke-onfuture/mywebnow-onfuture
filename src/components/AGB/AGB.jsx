import "./AGB.css";

function AGB() {
  return (
    <>
      <div className="agbContainer">
        <p className="updatedDate">Aktualisiert am: 4. November 2024</p>
        <p className="agbHeading">Allgemeine Geschäftsbedingungen (AGB)</p>
        <div className="textContainer">
          <div className="languageButton langButtonPrivacy">
            <p className="language">German</p>
            <img src="/arrowdown.svg" alt="" />
          </div>
          <div className="agbTextBlockContainer">
            <div className="agbTextBlock agbTextBlockFirstChild">
              <p className="agbParagraph">1. Geltungsbereich</p>
              <p className="agbText">
                Diese AGB gelten für die Nutzung der Webseite Mywebnow sowie für
                die Inanspruchnahme unserer Dienstleistungen im Bereich der
                Webseitenerstellung.
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">2. Leistungen von Mywebnow</p>
              <p className="agbText">
                <ol className="userDataList">
                  <li>
                    MyWebNow bietet branchenspezifische Designvorlagen zur
                    Erstellung von Webseiten an.
                  </li>
                  <li>
                    Die Kontaktaufnahme erfolgt über bereitgestellte Kanäle wie
                    WhatsApp, E-Mail, Instagram oder TikTok.
                  </li>
                  <li>
                    Nach der Kontaktaufnahme wird in einem kurzen Gespräch
                    geklärt, welche Leistungen gewünscht werden.
                  </li>
                  <li>
                    Auf Basis der besprochenen Anforderungen wird eine
                    individuelle Webseite erstellt.
                  </li>
                  <li>
                    Nach Übergabe der Webseite erhält der Kunde eine Rechnung
                    für die erbrachten Leistungen.
                  </li>
                  <li>
                    Falls der Kunde keine eigenen Inhalte bereitstellt (z. B.
                    Texte, Bilder, Logo), ist MyWebNow berechtigt, Platzhalter
                    oder generische Inhalte zu verwenden, die später auf Wunsch
                    des Kunden angepasst werden können. Der Kunde trägt die
                    Verantwortung für die Korrektur und Aktualisierung dieser
                    Inhalte.
                  </li>
                </ol>
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">3. Haftung</p>
              <p className="agbText">
                <ol className="userDataList">
                  <li>
                    MyWebNow haftet nicht für Inhalte, die vom Kunden
                    bereitgestellt werden (z. B. Texte, Bilder).
                  </li>
                  <li>
                    Der Kunde haftet selbst für die Rechtmäßigkeit und
                    Richtigkeit der Inhalte, die er MyWebNow zur Verfügung
                    stellt. MyWebNow übernimmt keine Haftung für Verstöße gegen
                    Urheber-, Marken- oder Persönlichkeitsrechte, die durch die
                    Nutzung der bereitgestellten Inhalte entstehen. Im Falle
                    eines Rechtsverstoßes stellt der Kunde MyWebNow von
                    sämtlichen Ansprüchen Dritter frei.
                  </li>
                  <li>
                    Für technische Fehler auf externen Plattformen (z. B.
                    WhatsApp, Instagram) übernehmen wir keine Haftung.
                  </li>
                  <li>
                    Die Nutzung der Webseite erfolgt auf eigenes Risiko des
                    Nutzers.
                  </li>
                </ol>
                <br />
                Es erfolgt keine Weitergabe Ihrer Daten an Dritte, es sei denn,
                dies ist zur Erfüllung unserer Dienstleistungen erforderlich (z.
                B. Webhosting).
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">4. Preise und Zahlungsmodalitäten</p>
              <p className="agbText">
                <ol className="userDataList">
                  <li>
                    Die Preise für unsere Dienstleistungen sind auf unserer
                    Plattform transparent dargestellt.
                  </li>
                  <li>
                    Die Bezahlung erfolgt in zwei Schritten:
                    <ul className="userDataListSecondChild">
                      <li>
                        50 % der Gesamtgebühr sind nach der schriftlichen
                        Beauftragung und vor Beginn der Arbeiten fällig.
                      </li>
                      <li>
                        Die restlichen 50 % werden nach Abschluss der Webseite
                        und ihrer Onlinestellung fällig.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ab dem zweiten Jahr nach Übergabe fallen jährliche Hosting-
                    und Domaingebühren an. Diese sind auf der Webseite unter
                    „Preismodell“ ersichtlich.
                  </li>
                  <li>
                    Sollte die jährliche Zahlung nicht fristgerecht erfolgen,
                    wird die Webseite offline genommen, bis die Zahlung eingeht.
                    Eine Reaktivierung der Webseite ist nach Begleichung der
                    offenen Beträge möglich.
                  </li>
                </ol>
              </p>
            </div>
            <div className="agbTextBlock agbLastChildBlock">
              <p className="agbParagraph">5. Schlussbestimmungen</p>
              <p className="agbText">
                <ol className="userDataList">
                  <li>
                    Änderungen der AGB werden auf unserer Webseite
                    bekanntgegeben.
                  </li>
                  <li>Es gilt das Recht der Bundesrepublik Deutschland. </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AGB;
