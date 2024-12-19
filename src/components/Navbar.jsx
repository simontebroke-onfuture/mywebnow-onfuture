import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navClassName, setNavClassName] = useState("res--navbar");
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    if (navClassName === "res--navbar") {
      setNavClassName("res--navbar res--navbar-visible");
      document.body.classList.add("no-scroll");
      setIsOpen(!isOpen);
    } else {
      setNavClassName("res--navbar");
      document.body.classList.remove("no-scroll");
      setIsOpen(!isOpen);
    }
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1340);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1340);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "MyWebNow",
          text: "MyWebNow - Letzter Klick zu deiner fertigen Website.",
          url: "https://www.mywebnow.de",
        })
        .then(() => {
          console.log("Shared successfully!");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <NavLink className="nav-link" to={"/"}>
            <div className="logoItem">
              <img src="/mywebnow.svg" alt="Logo" />
              <p>mywebnow</p>
            </div>
          </NavLink>
          <div className="linksItem">
            <a href="#choose">
              <p>Design Wählen</p>
            </a>
            <a href="#vorgehen">
              <p>Vorgehen</p>
            </a>
            <a href="#paket">
              <p>Paket Wählen</p>
            </a>
            <a href="#contact">
              <p>Kontaktieren</p>
            </a>
          </div>
          <div className="shareItem">
            <img src="/share3.svg" alt="Share" onClick={handleShare} />
            {isMobile ? (
              // <img src="/menu.svg" alt="Share" onClick={toggleNavbar} />
              <div className="clickRadius" onClick={toggleNavbar}>
                <div className={`menu-icon ${isOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={navClassName}>
        <hr className="navLine" />
        <a href="#choose" onClick={toggleNavbar}>
          <p className="res--nav-item">Design Wählen</p>
        </a>
        <a href="#vorgehen" onClick={toggleNavbar}>
          <p className="res--nav-item">Vorgehen</p>
        </a>
        <a href="#paket" onClick={toggleNavbar}>
          <p className="res--nav-item">Paket Wählen</p>
        </a>
        <a href="#contact" onClick={toggleNavbar}>
          <p className="res--nav-item">Kontaktieren</p>
        </a>
      </div>
    </>
  );
}

export default Navbar;
