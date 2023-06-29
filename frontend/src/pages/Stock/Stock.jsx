import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from "@material-ui/core";
import StockPhones from "../../components/StockComponent/StockComponent";
import Filters from "../../components/Filters/Filters";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Stock.scss";

export default function Stock() {
  const [modalOpen, setModalOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 769px)");
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="headerStock-text">
        <p>STOCK DES APPAREILS</p>
      </div>
      {modalOpen ? (
        <div className="modal">
          <div className="modal-content">
            <button type="button" className="close" onClick={closeModal}>
              &times;
            </button>
            <Filters />
          </div>
        </div>
      ) : null}
      <div className="Box_button">
        <button className="Filters_button" type="button" onClick={openModal}>
          Filtres
        </button>
      </div>
      <div className="StockRenderDesktop">
        {isLargeScreen && (
          <div>
            <Filters />
          </div>
        )}
        <StockPhones />
      </div>
      <Footer />
    </>
  );
}
