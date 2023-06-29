import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import cardhomeadd from "../../assets/image/img-ajout-appareil.svg";
import cardhomeview from "../../assets/image/img-acceder-bdd.svg";

export default function Home() {
  return (
    <header className="App-header">
      <Navbar />
      <main>
        <div className="container-big-button">
          <div className="card-button-home">
            <div className="card-home">
              <img src={cardhomeadd} alt="img-ajout-appareil" />
            </div>
            <p>Ajouter un nouvel appareil</p>
          </div>
          <div className="card-button-home">
            <div className="card-home">
              <img src={cardhomeview} alt="img-ajout-appareil" />
            </div>
            <p>Accéder au stock</p>
          </div>
        </div>
      </main>
      <Footer />
    </header>
  );
}
