import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <>
      <NavBar />
      <div className="header-text">
        <p>Ooops ...</p>
      </div>
      <div className="container-404">
        <div className="img-not-found" />
        <h1 className="title404">Erreur 404</h1>
      </div>
      <section className="text404">
        <p>La page que vous recherchez n'est pas disponible</p>
        <p>
          En{" "}
          <Link to="/" className="home-link">
            {" "}
            cliquant ici
          </Link>
          , vous retournerez à la page principale
        </p>
      </section>

      <Footer />
    </>
  );
}
