/* eslint-disable camelcase */
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Calculator.scss";

export default function Calculator() {
  return (
    <>
      <Navbar />
      <div className="headerCalculator-text">
        <p>Ajouter un appareil</p>
      </div>
      <section className="calculator_box">
        <p className="Calculator_Txt">
          Remplissez les champs ci-dessous pour évaluer le smartphone :
        </p>
        <form className="DropdownForm">
          <p className="Title_forms">IMEI</p>
          <label className="StyledLabel" htmlFor="pet-select">
            IMEI
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">13 chiffres</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
          <label className="StyledLabel" htmlFor="pet-select">
            Marque
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">
              Marque<span className="Star_color">*</span>
            </option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
          <label className="StyledLabel" htmlFor="pet-select">
            Modèle
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">
              Modèle<span className="Star_color">*</span>
            </option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
          <label className="StyledLabel" htmlFor="pet-select">
            Système d'exploitation
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">Système d'exploitation</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
          <p className="Title_forms">
            RAM<span className="Star_color">*</span>
          </p>
          <label className="StyledLabel" htmlFor="pet-select">
            IMEI
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">Min 2go</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
          <p className="Title_forms">
            Stockage<span className="Star_color">*</span>
          </p>
          <label className="StyledLabel" htmlFor="pet-select">
            Stockage
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">Min 16go</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
          <label className="StyledLabel" htmlFor="pet-select">
            Pondération
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">Pondération</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
          <p className="Title_forms">Chargeur et câble</p>
          <label className="StyledLabel" htmlFor="pet-select">
            Stockage
          </label>
          <select name="IMEI" className="Styledselect">
            <option value="">--</option>
            <option value="dog">Value 1</option>
            <option value="cat">Value 2</option>
            <option value="hamster">Value 3</option>
            <option value="parrot">Value 4</option>
          </select>
        </form>
      </section>
      <Footer />
    </>
  );
}
