import "./NavBar.scss";
import { useState } from "react";
import logoEmmaus from "../../assets/image/logo-emmausconnect.svg";
import logoprofil from "../../assets/image/icon-profile-circled.svg";
import menuburger from "../../assets/image/icon-menu-burger.svg";
import signout from "../../assets/image/icon-sign-out.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="global-navbar">
      <div className="logo-emmaus-navbar">
        <img src={logoEmmaus} alt="logo-emmaus-connect" />
      </div>
      <div className="profil-and-menu-burger">
        <div className="profil-navbar">
          <img src={logoprofil} alt="avatar-profil-user" />
        </div>
        <button
          type="button"
          className="menu-burger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menuburger} alt="icon-menu-burger" />
        </button>
      </div>
      {isOpen && (
        <div className="main-sub-menu-burger">
          <div className="sub-menu-burger">
            <div className="titles-sub-menu-burger">
              <div className="title-one-sub-menu-burger">
                <p>AJOUTER UN APPAREIL</p>
              </div>
              <div className="title-two-sub-menu-burger">
                <p>STOCK DES APPAREILS</p>
              </div>
              <div className="title-three-sub-menu-burger">
                <p>PROFIL</p>
              </div>
            </div>
            <div className="deconnected-sub-menu-burger">
              <button type="button" className="deconnected">
                <img src={signout} alt="icon-sign-out" />
                <p>DÉCONNEXION</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
