import "./Filters.scss";
import InputMobile from "../Formulaires/InputMobile";

export default function Filters() {
  return (
    <div className="Filters_Container">
      <form>
        <label htmlFor="brand" className="brandLabel">
          <InputMobile
            placeholder="Marque"
            name="brand"
            id="brand"
            autoComplete="brand"
          />
        </label>
        <label htmlFor="model" className="modelLabel">
          <InputMobile
            placeholder="Modèle"
            name="model"
            id="model"
            autoComplete="model"
          />
        </label>
        <label htmlFor="factory" className="factoryLabel">
          <InputMobile
            placeholder="Magasin"
            name="factory"
            id="factory"
            autoComplete="factory"
          />
        </label>
        <label htmlFor="storage" className="storageLabel">
          <InputMobile
            placeholder="Stockage"
            name="storage"
            id="storage"
            autoComplete="storage"
          />
        </label>
        <label htmlFor="network" className="networkLabel">
          <InputMobile
            placeholder="Réseau"
            name="network"
            id="network"
            autoComplete="network"
          />
        </label>
        <label htmlFor="catégory" className="catégoryLabel">
          <InputMobile
            placeholder="Catégorie"
            name="catégory"
            id="catégory"
            autoComplete="catégory"
          />
        </label>
        <label htmlFor="weighting" className="weightingLabel">
          <InputMobile
            placeholder="Pondération"
            name="weighting"
            id="weighting"
            autoComplete="weighting"
          />
        </label>
      </form>
    </div>
  );
}
