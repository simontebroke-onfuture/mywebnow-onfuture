import "./GridSection.css";

function GridSection() {
  return (
    <div className="gridSection">
      <section id="paket">
        <p className="heading">Wähle das Paket, das am besten zu dir passt.</p>
      </section>
      <p className="headText">Preispakete</p>
      <div className="pricingGrid">
        <div className="pricingGridContainer">
          <div className="gridItem item1">
            <div className="plan">
              <img src="/mywebnow.svg" alt="" />
              <p className="topText">Pro</p>
            </div>
            <div className="pricingText">
              <p className="priceText">99 €</p>
              <p className="priceText priceTextDef">
                <span>/</span> Einmalig
              </p>
            </div>
            <p className="provisionText">
              Nach 12 Monaten (ab dem 2 Jahr) 139 € jährlich für Domain, Hosting
              & Support.
            </p>
            <button className="purchaseButton">Jetzt Starten</button>
            <div className="provisions">
              <div className="provisions">
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">Professionelles Design</p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Branchenspezifische Funktionen
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">Domain & Hosting inklusive</p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Vollständige Integration der Domain (inklusive Kauf &
                    Einrichtung)
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Rechtssicher (Impressum, Datenschutz & Cookies)
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Automatische Online Stellung in nur 5 Tagen
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">Live Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem item2">
            <div className="plan">
              <img src="/mywebnow.svg" alt="" />
              <p className="topText">Pro</p>
              <p className="topText plus">plus</p>
            </div>
            <div className="pricingText">
              <p className="priceText">99 €</p>
              <p className="priceText priceTextDef">
                <span>/</span> Einmalig
              </p>
            </div>
            <p className="provisionText">
              Nach 12 Monaten (ab dem 2 Jahr) 139 € jährlich für Domain, Hosting
              & Support.
            </p>
            <button className="purchaseButton">Jetzt Starten</button>
            <div className="provisions">
              <div className="provisions">
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">Professionelles Design</p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Branchenspezifische Funktionen
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">Domain & Hosting inklusive</p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Vollständige Integration der Domain (inklusive Kauf &
                    Einrichtung)
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Rechtssicher (Impressum, Datenschutz & Cookies)
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Automatische Online Stellung in nur 5 Tagen
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">Live Support</p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <section id="contact"></section>
                  <p className="provisionText">Support für Anpassungen</p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">Bessere Google Platzierung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tryBox">
        <p className="boxText">Alles beginnt mit einem Wort.</p>
        <div className="iconItem">
          <a href="https://wa.me/4915734729666" target="_blank">
            <div className="icon">
              <img src="/whatsapp.svg" alt="" />
            </div>
          </a>
          <a href="https://instagram.com/usemywebnow" target="_blank">
            <div className="icon">
              <img src="/instagram.svg" alt="" />
            </div>
          </a>
          <a href="https://www.tiktok.com/@mywebnow" target="_blank">
            <div className="icon">
              <img src="/tiktok.svg" alt="" />
            </div>
          </a>
          <a href="mailto:info@mywebnow.de">
            <div className="icon">
              <img src="/email.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="sFooterContainer">
        <div className="sTextBlock">
          <p className="sText">
            1. Mywebnow ist eine innovative Plattform, die durch den Einsatz
            künstlicher Intelligenz und modernster Technologien professionelle
            Webseiten für jedermann zugänglich macht. Das System analysiert die
            Anforderungen der Nutzer anhand von Nachrichten, die über bevorzugte
            Kommunikationskanäle wie WhatsApp, Instagram oder E-Mail
            eingehen.Durch die intelligente Verarbeitung der Daten werden
            branchenspezifische Designs und Funktionen automatisch erstellt und
            anschließend von unserem Team optimiert. Mywebnow übernimmt dabei
            alle Schritte:
            <br />
            <br />
            <ul className="sList">
              <li> Domain-Integration (inklusive Kauf und Einrichtung)</li>
              <li>Professionelles Design und Entwicklung</li>
              <li>
                Vollständige Anpassung an branchenspezifische Anforderungen
              </li>
              <li>Rechtstexte (Datenschutz, Impressum)</li>
              <li>
                Live-Stellung der Webseite in Verbindung mit GitHub und der
                sicheren
              </li>
              <li>Hosting-Infrastruktur von IONOS</li>
            </ul>
            <br />
            Das gesamte System ist DSGVO-konform, und Nutzer werden jederzeit
            über den Fortschritt ihrer Webseite informiert. Mit Mywebnow müssen
            sie nichts selbst machen – keine versteckten Kosten, kein Aufwand,
            nur Ergebnisse.
          </p>
        </div>
        <div className="sTextBlock">
          <p className="sText">
            2. Alle Preispakete bei Mywebnow sind vor Beginn des Projekts
            vollständig zu zahlen. Diese Vorauszahlung ist ein verbindlicher
            Schritt und dient als Startschuss für das Projekt. Erst nach Eingang
            der Zahlung beginnen wir mit der Umsetzung der Webseite. Die
            Einmalzahlung deckt alle Leistungen ab, inklusive Design,
            Domain-Integration, Live-Stellung und Hosting für das erste Jahr. Ab
            dem zweiten Jahr fallen jährliche Kosten an:
            <br />
            <br />
            <ul className="sList">
              <li>
                Pro Paket: 99 € Einmalig, nach 12 Monaten (Ab dem 2 Jahr) 139 €
                jährlich
              </li>
              <li>
                Pro Plus Paket: 299 € Einmalig, nach 12 Monaten (Ab dem 2 Jahr)
                179 € jährlich
              </li>
            </ul>
            <br />
            Die jährlichen Kosten decken Hosting, Domain und Support ab. Eine
            Rechnung wird rechtzeitig über das bevorzugte Kommunikationstool
            zugestellt. Nach Zahlung bleibt die Webseite ohne Unterbrechung
            online.
          </p>
        </div>
        <div className="sTextBlock">
          <p className="sText">
            3. Die von Mywebnow bereitgestellten Rechtstexte wie Impressum und
            Datenschutzrichtlinien werden nach bestem Wissen erstellt, sind
            jedoch keine rechtlich verbindlichen Dokumente. Wir sind keine
            Rechtsberater und übernehmen keine Haftung für die Rechtssicherheit
            der Texte.
            <br />
            <br />
            Wir empfehlen allen Nutzern, die bereitgestellten Rechtstexte von
            einem professionellen Rechtsbeistand überprüfen und anpassen zu
            lassen, um die rechtlichen Anforderungen vollständig zu erfüllen.
          </p>
        </div>
        <div className="sTextBlock">
          <p className="sText">
            4. Alle Webseiten werden auf der sicheren und DSGVO-konformen
            Infrastruktur von IONOS gehostet. Die Kombination aus GitHub für die
            technische Umsetzung und IONOS für das Hosting garantiert höchste
            Zuverlässigkeit und Sicherheit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
