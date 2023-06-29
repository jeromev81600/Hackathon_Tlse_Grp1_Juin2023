/* eslint-disable no-await-in-loop */
import axios from "axios";
import { useEffect } from "react";

function ModaleDetails() {
  //   const [phones, setPhones] = useState([]);

  const fetchStockPhones = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/smartphone`
      );
      const fetchedPhones = response.data;

      for (const phone of fetchedPhones) {
        // eslint-disable-next-line no-await-in-loop
        const modelResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/model/${phone.model_id}`
        );
        const modelName = modelResponse.data.model;
        phone.model_name = modelName;

        const idResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/model/${phone.id}`
        );
        const modelId = idResponse.data.id;
        phone.model_id = modelId;

        // eslint-disable-next-line no-await-in-loop
        const userResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/user/${phone.user_id}`
        );
        const factoryName = userResponse.data.factory;
        phone.factory = factoryName;
      }

      //   setPhones(fetchedPhones);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStockPhones();
  }, []);

  return (
    <div>
      <h1>coucou</h1>
    </div>
  );
}
export default ModaleDetails;
