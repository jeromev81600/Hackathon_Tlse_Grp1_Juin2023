import "./Filters.scss";

export default function Filters() {
  return (
    <section className="Filters_Container">
      <form className="Filters_form">
        <h2 className="Filters-title">Tri par Filtre</h2>
        <label htmlFor="brand" className="Filter_label">
          <select name="brand" className="Filter_select">
            <option value="">Marque</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </label>
        <label htmlFor="model" className="Filter_label">
          <select name="model" className="Filter_select">
            <option value="">modèle</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </label>
        <label htmlFor="factory" className="Filter_label">
          <select name="factory" className="Filter_select">
            <option value="">Magasin</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </label>
        <label htmlFor="storage" className="Filter_label">
          <select name="storage" className="Filter_select">
            <option value="">Stockage</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </label>
        <label htmlFor="network" className="Filter_label">
          <select name="network" className="Filter_select">
            <option value="">Réseau</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </label>
        <label htmlFor="category" className="Filter_label">
          <select name="category" className="Filter_select">
            <option value="">Catégorie</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </label>
        <label htmlFor="weighting" className="Filter_label">
          <select name="weighting" className="Filter_select">
            <option value="">Pondération</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </label>
      </form>
    </section>
  );
}
