import React, { useState } from "react";
import "./Footer.scss";
import logoEmmaus from "../../assets/image/logo-emmausconnect.svg";
import slogan from "../../assets/image/slogan.svg";
import sloganpart1 from "../../assets/image/slogan-mobile-part1.svg";
import sloganpart2 from "../../assets/image/slogan-mobile-part2.svg";
import arrowUp from "../../assets/image/arrow-circle-up.svg";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="global-footer">
      <div className="logo-footer">
        <img src={logoEmmaus} alt="logo-emmaus-connect" />
      </div>
      <div className="slogan-footer-mobile">
        <img src={sloganpart1} alt="slogan-emmaus-connect" />
        <img src={sloganpart2} alt="slogan-emmaus-connect" />
      </div>
      <div className="slogan-footer-desktop">
        <img src={slogan} alt="slogan-emmaus-connect" />
      </div>
      {!isVisible && (
        <div className="arrow-up">
          <a href="#home">
            <button
              type="button"
              className="arrow-up"
              onClick={() => setIsVisible(true)}
            >
              <img src={arrowUp} alt="fleche-retour-en-haut" />
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Footer;
