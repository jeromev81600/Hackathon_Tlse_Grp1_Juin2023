// import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <>
      <div className="header-text">
        <p>Ooops ...</p>
      </div>
      <div className="container-404">
        <div className="img-not-found" />
        <h1 className="title404">Erreur 404</h1>
      </div>
      <section className="text404">
        <p>
          La page que vous recherchez n'est pas disponible
          <div className="emoji-sad" />
        </p>
        {/* <Link to="/"> Cliquer ici</Link> */}
        <p>
          En{" "}
          <a href="/#" className="home-link">
            cliquant ici
          </a>
          , vous retournerez à la page principale
        </p>
      </section>
    </>
  );
}
