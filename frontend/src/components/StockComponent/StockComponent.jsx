import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StockComponent.scss";

function StockPhones() {
  const [phones, setPhones] = useState([]);

  const fetchStockPhones = async () => {
    try {
      const response = await axios.get("http://localhost:5000/smartphone");
      const fetchedPhones = response.data;

      for (const phone of fetchedPhones) {
        // eslint-disable-next-line no-await-in-loop
        const brandResponse = await axios.get(
          `http://localhost:5000/brand/${phone.brand_id}`
        );
        const brandName = brandResponse.data.brand;
        phone.brand_name = brandName;

        // eslint-disable-next-line no-await-in-loop
        const modelResponse = await axios.get(
          `http://localhost:5000/model/${phone.model_id}`
        );
        const modelName = modelResponse.data.model;
        phone.model_name = modelName;
      }

      setPhones(fetchedPhones);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStockPhones();
  }, []);

  return (
    <div>
      <h1>Stock de smartphones</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <div className="phone-card">
              <div className="photo-content">
                <img className="photo" src={phone.url_phone} alt="model" />
              </div>
              <div className="info">
                <p>Marque : {phone.brand_name}</p>
                <p className="label">Modèle : {phone.model_name}</p>
                <p>Prix : {phone.price}</p>{" "}
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
  );
}

export default StockPhones;
