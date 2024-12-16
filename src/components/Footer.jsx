import "./Footer.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 830) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check
    handleResize();

    // Event listener für Fenstergröße
    window.addEventListener("resize", handleResize);

    // Cleanup beim Unmounten
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="footer">
        <div className="footer-grid">
          <div className="column column1">
            <p className="footer-item footer-headline">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item ">Our Research</p>
          </div>
          <div className="column column2">
            <p className="footer-item footer-headline">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item ">Our Research</p>

            <p className="footer-item ">Our Research</p>
          </div>
          <div className="column column3">
            <p className="footer-item footer-headline">Our Research</p>
            <p className="footer-item">Our Research</p>
          </div>
        </div>
        <div className="lower-footer">
          <button className="langButton">
            <img src="/lang.svg" alt="" />
            <p className="buttonText">Deutsch</p>
          </button>
          <div className="bottom-footer-sec">
            {isMobile ? (
              <div>
                <p>© 2024 Mywebnow. All rights reserved.</p>
                <p>
                  <NavLink className="navLink" to={"/cookies"}>
                    <span>Cookies & Nutzung</span>
                  </NavLink>
                  <NavLink className="navLink" to={"/privacy"}>
                    <span>Datenschutz</span>
                  </NavLink>
                  <NavLink className="navLink" to={"/agb"}>
                    <span>Impressum</span>
                  </NavLink>
                </p>
              </div>
            ) : (
              <div>
                <p>
                  © 2024 Mywebnow. All rights reserved.
                  <NavLink className="navLink" to={"/cookies"}>
                    <span>Cookies & Nutzung</span>
                  </NavLink>
                  <NavLink className="navLink" to={"/privacy"}>
                    <span>Datenschutz</span>
                  </NavLink>
                  <NavLink className="navLink" to={"/agb"}>
                    <span>Impressum</span>
                  </NavLink>
                </p>
              </div>
            )}

            <div className="icons">
              <img src="/whatsapp.svg" alt="" />
              <img src="/instagram.svg" alt="" />
              <img src="/tiktok.svg" alt="" />
              <img src="/email.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
