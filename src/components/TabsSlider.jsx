import React, { useState } from "react";
import { motion } from "motion/react";
import "./TabsSlider.css";

const tabs = [
  {
    id: "cafe",
    label: "Café",
    img: "/coffee.jpg",
    functions:
      "Lieferando · Social-Media-Links · Online-Reservierung · Standort & Navigation · Digitale Speisekarte · Tagesangebote · Events · Galerie · Newsletter · Sprachauswahl · Kalender · QR-Codes",
    description: "Beschreibung",
    sumDesc:
      "Sobald du dein Design gewählt und uns deine Wünsche mitgeteilt hast, ist deine Webseite in bis zu 5 Tagen online.",
    designText:
      "Auf Basis der marktführenden Designs von Starbucks haben wir ein Layout geschaffen, das perfekt auf Cafés zugeschnitten ist. Besondere Getränke und Süßspeisen stehen im Mittelpunkt, um Kunden ein einzigartiges Erlebnis zu bieten.",
    icon: "/cafe.svg",
  },
  {
    id: "gastronomie",
    label: "Gastronomie",
    img: "/Gastronomie.jpg",
    functions:
      "Lieferando · Social-Media-Links · Online-Reservierung · Standort & Navigation · Digitale Speisekarte · Tagesangebote · Events · Galerie · Newsletter · Sprachauswahl · Kalender · QR-Codes",
    description: "Beschreibung",
    sumDesc:
      "Sobald du dein Design gewählt und uns deine Wünsche mitgeteilt hast, ist deine Webseite in bis zu 5 Tagen online.",
    dynamicText:
      "Folgende Elemente deiner Seite wie Bilder, Texte, Fonts, Farben, Logos und Buttons sind variabel und frei personalisierbar.",
    icon: "/restaurant.svg",
    designText:
      "Inspiriert von Apple und IKEA wurde dieses Design speziell entwickelt, um die Atmosphäre deines Lokals einzufangen. Menüs, das Team und besondere Highlights werden optimal präsentiert, um Gäste direkt anzusprechen.",
  },
  {
    id: "dienstleistungen",
    label: "Dienstleistungen",
    img: "/Services.jpg",
    functions:
      "Leistungsübersicht · Referenzen · Kooperation & Partner · Terminbuchung · Preisliste · Galerie · Onlineshop-Verlinkung · FAQ-Bereich · Sprachauswahl · Standortanzeige · Teamvorstellung",
    sumDesc:
      "Sobald du dein Design gewählt und uns deine Wünsche mitgeteilt hast, ist deine Webseite in bis zu 5 Tagen online.",
    dynamicText:
      "Folgende Elemente deiner Seite wie Bilder, Texte, Fonts, Farben, Logos und Buttons sind variabel und frei personalisierbar.dqwdwqdqwdqwdwq",
    icon: "/globus.svg",
    designText:
      "Mit einem Ansatz, der sich an den klaren Strukturen von IKEA orientiert, wurde dieses Design so gestaltet, dass es alle wichtigen Informationen eines Dienstleisters übersichtlich darstellt. Leistungen, Referenzen und Kontaktmöglichkeiten stehen dabei im Vordergrund.",
  },
  {
    id: "vereine",
    label: "Vereine & Organisationen",
    img: "/Vereine.jpg",
    functions:
      "Fußball.de - Anbindung · Spielstände & Ergebnisse · Mitgliederbereich · Galerie · Sponsoren & Partner · Team- & Vereinvorstellung · News & Highlights · Social-Media-Links · Onlineshop-Anbindung · Kalender",
    description: "Beschreibung",
    sumDesc:
      "Sobald du dein Design gewählt und uns deine Wünsche mitgeteilt hast, ist deine Webseite in bis zu 5 Tagen online.",
    dynamicText:
      "Geschäftstools wie CRM-Formulare, Marketing-Kampagnen und Analysen sind konfigurierbar. diqwdioq j idqwj iqwjd iqwjdiq",
    icon: "/group.svg",
    designText:
      "Dieses Design, inspiriert von Apple, bringt die wichtigsten Aspekte deines Vereins auf den Punkt. Spielstände, Errungenschaften und Mitgliedschaften werden modern und einladend präsentiert, sodass sich alles Wichtige auf einen Blick erschließt.",
  },
  {
    id: "handwerk",
    label: "Handwerk & Bau",
    img: "/Handwerk.jpg",
    functions:
      "Referenzprojekte · Leistungsübersicht · Projektstatus & Updates · Projektstatus & Updates · Kontakt- & Angebotsanfragen · Partner & Kooperationen · Galerie & Slideshow · Das Team · Online-Terminbuchung · FAQ-Bereich · Mehrsprachige Unterstützung",
    description: "Beschreibung",
    sumDesc:
      "Sobald du dein Design gewählt und uns deine Wünsche mitgeteilt hast, ist deine Webseite in bis zu 5 Tagen online.",
    dynamicText:
      "Gestalterische Elemente wie Illustrationen, Layouts und 3D-Modelle können angepasst werden.",
    icon: "/hammer.svg",
    designText:
      "Mit einer Struktur, die von IKEA inspiriert ist, stellt dieses Design Projekte, Leistungen und Partnerschaften klar und übersichtlich dar. Es betont die wichtigsten Aspekte eines Bauunternehmens und erleichtert die Kommunikation mit potenziellen Kunden.",
  },
];

function TabsSlider() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const [currentInfo, setCurrentInfo] = useState("funktionen");

  function setInfoToFunktionen() {
    setCurrentInfo("funktionen");
  }

  function setInfoToDesign() {
    setCurrentInfo("design");
  }

  function setInfoToLaufzeit() {
    setCurrentInfo("laufzeit");
  }

  return (
    <div className="container">
      <p className="heading">Wähle ein Design, passend zu deinem Business.</p>
      <div className="tabs-slider-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${
              activeTab === tab.id ? "active" : "hover"
            }`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <img src={tab.icon} alt="" className="categoryIcon" />
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="tab-bubble"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="images-container">
        <div className="image-container">
          <div className="image">
            {activeTabData && (
              <img src={activeTabData.img} alt={activeTabData.label} />
            )}
          </div>
        </div>
      </div>
      <div className="additionalDesc">
        {/* <div className="desc">
          <img src="arrow.svg" alt="^" />
          <p className="descText">{activeTabData.dynamicText}</p>
        </div>
        <div className="descBox">
          <div className="descBoxInnerContainer">
            <div className="categoriesContainer">
              {activeTabData.categories.map((category, index) => (
                <div key={index} className="category">
                  {category}
                </div>
              ))}
            </div>
            <p className="descTitle">{activeTabData.description}</p>
            <p className="sumDesc">{activeTabData.sumDesc}</p>
          </div>
        </div> */}
        <div className="descBox">
          <div className="descBoxInnerContainer">
            <div className="descFunctionContainer">
              <div className="descFunctions">
                <div className="descFunction">
                  <div
                    className="infoDepFunction"
                    onClick={setInfoToFunktionen}
                  >
                    <p className="depText">Funktionen</p>
                    {currentInfo == "funktionen" ? (
                      <hr className="hr1 visible" />
                    ) : (
                      <hr className="hr1 " />
                    )}
                  </div>
                  <div className="infoDepFunction" onClick={setInfoToDesign}>
                    <p className="depText">Design</p>
                    {currentInfo == "design" ? (
                      <hr className="hr1 visible" />
                    ) : (
                      <hr className="hr1 " />
                    )}
                  </div>
                  <div className="infoDepFunction" onClick={setInfoToLaufzeit}>
                    <p className="depText">Laufzeit zum GoLive</p>
                    {currentInfo == "laufzeit" ? (
                      <hr className="hr1 visible" />
                    ) : (
                      <hr className="hr1 " />
                    )}
                  </div>
                </div>
                <hr className="hrGen" />
              </div>
            </div>
            {currentInfo == "laufzeit" ? (
              <p className="sumDesc">{activeTabData.sumDesc}</p>
            ) : currentInfo == "funktionen" ? (
              <div className="categoriesContainer">
                <div className="sumDesc">{activeTabData.functions}</div>
              </div>
            ) : currentInfo == "design" ? (
              <p className="sumDesc">{activeTabData.designText}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabsSlider;
