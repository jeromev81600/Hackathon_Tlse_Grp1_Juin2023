/* eslint-disable camelcase */
import { useContext, useEffect } from "react";
import DetailsPhoneContext from "../../contexts/DetailsPhoneContext";

function ModaleDetails() {
  const { id, smartphone, setSmartphone } = useContext(DetailsPhoneContext);
  const fetchSmartphoneDetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/smartphone/${id}`
      );
      const data = await response.json();
      setSmartphone(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du smartphone:",
        error
      );
    }
  };
  useEffect(() => {
    fetchSmartphoneDetails();
  }, [id]);

  console.info(smartphone, id);
  return (
    <div className="modal-phone-details">
      <h2>{smartphone.brand}</h2>
      <img src={smartphone.url_logo} alt={smartphone.brand} />

      <h3>Model: {smartphone.model}</h3>
      <p>Operating System: {smartphone.operating_system}</p>
      <p>Screen: {smartphone.screen}</p>
      <p>Network: {smartphone.network}</p>
      <p>Storage: {smartphone.storage}</p>
      <p>RAM: {smartphone.ram}</p>
      <p>Weighting: {smartphone.weighting}</p>
      <p>State: {smartphone.state}</p>
      <p>Price: {smartphone.price}</p>
      <img
        src={smartphone.url_phone}
        alt={smartphone.brand}
        className="imgPhone"
      />
    </div>
  );
}
export default ModaleDetails;
