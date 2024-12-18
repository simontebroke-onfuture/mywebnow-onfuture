import "./GridSection.css";

function GridSection() {
  return (
    <div className="gridSection">
      <p className="heading">Wähle das Paket, das am besten zu dir passt.</p>
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
          <a href="https://wa.me/4915175357857" target="_blank">
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
    </div>
  );
}

export default GridSection;
