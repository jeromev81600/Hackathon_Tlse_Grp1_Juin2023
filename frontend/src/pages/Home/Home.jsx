import { useContext } from "react";
import AuthFunctionContext from "../../contexts/AuthFunctionContext";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbarold/Navbar";
import "./Home.scss";
import cardhomeadd from "../../assets/image/img-ajout-appareil.svg";
import cardhomeview from "../../assets/image/img-acceder-bdd.svg";

function Home() {
  const { userToken } = useContext(AuthFunctionContext);

  return (
    // (userInfo.is_admin === 0 || userInfo.is_admin === 1) &&
    userToken && (
      <div className="home">
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
      </div>
    )
  );
}

export default Home;
