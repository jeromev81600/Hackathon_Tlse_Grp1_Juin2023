import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from "@material-ui/core";
import "./StockComponent.scss";
// import ModaleDetails from "../ModaleDetails/ModaleDetails";

function StockPhones() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const isLargeScreen = useMediaQuery("(min-width: 769px)");

  const fetchStockPhones = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/smartphone`
      );
      const fetchedPhones = response.data;

      for (const phone of fetchedPhones) {
        // eslint-disable-next-line no-await-in-loop
        const brandResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/brand/${phone.brand_id}`
        );
        const brandName = brandResponse.data.brand;
        phone.brand_name = brandName;

        // eslint-disable-next-line no-await-in-loop
        const modelResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/model/${phone.model_id}`
        );
        const modelName = modelResponse.data.model;
        phone.model_name = modelName;

        // eslint-disable-next-line no-await-in-loop
        const userResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/${phone.user_id}`
        );
        const factoryName = userResponse.data.factory;
        phone.factory = factoryName;
      }

      setPhones(fetchedPhones);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStockPhones();
  }, []);

  const openModal = (phone) => {
    setSelectedPhone(phone);
  };

  const closeModal = () => {
    setSelectedPhone(null);
  };

  return (
    <div className="table-container">
      {isLargeScreen ? (
        <table>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Marque</th>
              <th>Modèle</th>
              <th>Prix</th>
              <th>Lieu</th>
              <th>Chargeur</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {phones.map((phone) => (
              <tr key={phone.id}>
                <td>{phone.brand_name.url_logo}</td>
                <td>{phone.brand_name}</td>
                <td>{phone.model_name}</td>
                <td>{phone.price}</td>
                <td>{phone.factory}</td>
                <td
                  className={`charger ${
                    phone.has_charger ? "has-charger" : "no-charger"
                  }`}
                />
                <td>
                  <button type="button" onClick={() => openModal(phone)}>
                    Voir les détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <ul>
            {phones.map((phone) => (
              <li key={phone.id}>
                <div className="phone-card">
                  <div className="photo-content">
                    <img
                      className="photo"
                      src={phone.brand_name.url_logo}
                      alt="model"
                    />
                  </div>
                  <div className="info">
                    <p>Marque : {phone.brand_name}</p>
                    <p className="label">Modèle : {phone.model_name}</p>
                    <p>Prix : {phone.price}</p>
                    <p>Lieu : {phone.factory}</p>
                  </div>
                  <p
                    className={`charger ${
                      phone.has_charger ? "has-charger" : "no-charger"
                    }`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedPhone && (
        <div className="modal">
          <div className="modal-content">
            <button type="button" className="close" onClick={closeModal}>
              &times;
            </button>
            <h2>Détails du Smartphone</h2>
            <table>
              <tbody>
                <tr>
                  <td>ID:</td>
                  <td>{selectedPhone.id}</td>
                </tr>
                <tr>
                  <td>Marque:</td>
                  <td>{selectedPhone.brand_name}</td>
                </tr>
                <tr>
                  <td>Modèle:</td>
                  <td>{selectedPhone.model_name}</td>
                </tr>
                <tr>
                  <td>Prix:</td>
                  <td>{selectedPhone.price}</td>
                </tr>
                <tr>
                  <td>Lieu:</td>
                  <td>{selectedPhone.factory}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockPhones;
