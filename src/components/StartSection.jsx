import "./StartSection.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function StartSection() {
  const words = [
    "Eine Seite, die mein Restaurant perfekt darstellt.",
    "Eine Plattform, die unsere Vereinsarbeit sichtbar macht.",
    "Eine Seite, die Sicherheit und Seriosität ausstrahlt.",
    "Ich will eine Seite wie Starbucks: modern und einladend.",
    "Eine Webseite, die meine Specials und Events zeigt.",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 15 : 40;

    if (!isDeleting && characterIndex === currentWord.length) {
      // pausing after word is fully typed out
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500); // wait 1.5 seconds after typing is done
      return;
    }

    if (isDeleting && characterIndex === 0) {
      // pause before typing the next word after deletion
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(false); // start typing the next word
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1000); // 1 second pause after deletion
      return;
    }

    const timeout = setTimeout(() => {
      const nextCharacterIndex = isDeleting
        ? characterIndex - 1
        : characterIndex + 1;
      setCharacterIndex(nextCharacterIndex);
      setCurrentText(currentWord.substring(0, nextCharacterIndex));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [characterIndex, isDeleting, wordIndex, isPaused]);

  return (
    <div className="startSection">
      <div className="startSectionContainer">
        <div className="headingItem">
          <h1 className="mainHeading">Worum geht's bei deiner Website?</h1>
          <p className="startDesc">
            Schreib uns – egal wo. Mywebnow übernimmt alles. In 5 Tagen ist
            deine Webseite online – professionell aufbereitet, ohne dass du
            etwas tun musst.
          </p>
        </div>
        <div className="searchItem">
          <p className="searchText">
            {currentText}
            <span></span>
          </p>
          <img src="/searcharrow.svg" alt="Search" />
        </div>
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
    </div>
  );
}

export default StartSection;
