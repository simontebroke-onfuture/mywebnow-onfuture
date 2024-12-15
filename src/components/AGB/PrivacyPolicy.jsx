import "./AGB.css";

function PrivacyPolicy() {
  return (
    <>
      <div className="agbContainer">
        <p className="updatedDate">Aktualisiert am: 4. November 2024</p>
        <p className="agbHeading">Datenschutzerklärung</p>
        <div className="textContainer">
          <div className="languageButton langButtonPrivacy">
            <p className="language">German</p>
            <img src="/arrowdown.svg" alt="" />
          </div>
          <div className="introductionTextBlock">
            <p className="introductionText">
              Der Schutz Ihrer persönlichen Daten ist uns, bei MyWebNow, ein
              besonders wichtiges Anliegen. Wir verarbeiten Ihre Daten daher
              ausschließlich auf Grundlage der gesetzlichen Bestimmungen,
              insbesondere der Datenschutz-Grundverordnung (DSGVO) und des
              Bundesdatenschutzgesetzes (BDSG).
              <br />
              <br />
              Mit dieser Datenschutzerklärung möchten wir Sie darüber
              informieren, welche Daten wir auf unserer Webseite erheben, wie
              diese verarbeitet und genutzt werden und welche Rechte Ihnen in
              Bezug auf Ihre Daten zustehen. Wir gewährleisten, dass alle von
              uns erhobenen Daten mit größter Sorgfalt und Vertraulichkeit
              behandelt werden.
            </p>
          </div>
          <div className="agbTextBlockContainer">
            <div className="agbTextBlock">
              <p className="agbParagraph">1. Verantwortlicher</p>
              <p className="agbText">
                Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:
                <br />
                <br />
                <span>Onfuture</span>
                <br />
                Konrad Zuse Straße 4, 46397 Bocholt
                <br />
                info@mywebnow.de
                <br />
                Für Datenschutzanfragen kontaktieren Sie uns bitte über die oben
                angegebenen Kontaktdaten.
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">2. Erhobene Daten</p>
              <p className="agbText">
                Wir erheben personenbezogene Daten ausschließlich im Rahmen der
                Kontaktaufnahme über unsere Plattform oder verknüpfte Dienste
                wie WhatsApp, E-Mail oder Social Media:
                <br />
                <br />
                <ul className="userDataList">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Nachrichteninhalt</li>
                </ul>
                <br />
                Darüber hinaus können automatisch technische Daten durch Cookies
                erfasst werden (siehe Cookies- und Nutzungsrichtlinie).
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">3. Verwendung der Daten</p>
              <p className="agbText">
                Ihre Daten werden ausschließlich verwendet:
                <br />
                <br />
                <ul className="userDataList">
                  <li>
                    Zur Bearbeitung Ihrer Anfragen und Bereitstellung unserer
                    Dienstleistungen.
                  </li>
                  <li>
                    Zur Erstellung der Rechnung sowie zur jährlichen Abrechnung
                    von Hosting- und Domaingebühren.
                  </li>
                  <li>
                    Zur Verbesserung unserer Plattform durch anonymisierte
                    Analysen.
                  </li>
                </ul>
                <br />
                Es erfolgt keine Weitergabe Ihrer Daten an Dritte, es sei denn,
                dies ist zur Erfüllung unserer Dienstleistungen erforderlich (z.
                B. Webhosting).
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">4. Rechte der Nutzer</p>
              <p className="agbText">
                Sie haben das Recht:
                <br />
                <br />
                <ol className="userDataList">
                  <li>
                    Auskunft über die Verarbeitung Ihrer Daten zu erhalten.
                  </li>
                  <li>Ihre Daten berichtigen oder löschen zu lassen.</li>
                  <li>
                    Der Verarbeitung zu widersprechen oder Ihre Einwilligung zu
                    widerrufen.
                  </li>
                </ol>
              </p>
            </div>
            <div className="agbTextBlock">
              <p className="agbParagraph">5. Speicherdauer der Daten</p>
              <p className="agbText">
                Ihre Daten werden nur so lange gespeichert, wie es für die
                Erbringung unserer Dienstleistungen oder zur Erfüllung
                gesetzlicher Vorgaben notwendig ist. Nach Abschluss des Projekts
                werden bereitgestellte Inhalte (z. B. Texte, Bilder, Logos)
                nicht weiter gespeichert, es sei denn, gesetzliche Vorschriften
                erfordern dies. Anschließend werden die Daten gelöscht.
              </p>
            </div>
            <div className="agbTextBlock agbLastChildBlock">
              <p className="agbParagraph">6. Cookies und Analyse-Tools</p>
              <p className="agbText">
                Weitere Details zu Cookies und Analyse-Tools finden Sie in der{" "}
                <span>Cookies- und Nutzungsrichtlinie.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
