import "../styles/NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <>
      <div className="header-text">
        <p>Ooops ...</p>
      </div>
      <div className="img-not-found" />
      <h1 className="title404">Erreur 404</h1>
      <section className="text404">
        <p>
          La page que vous recherchez n'est pas disponible
          <div className="emoji-sad" />
        </p>
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
