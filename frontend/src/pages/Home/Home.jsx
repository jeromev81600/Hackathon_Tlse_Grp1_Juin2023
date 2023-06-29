import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function Home() {
  return (
    <header className="App-header">
      <NavBar />
      <NotFoundPage />
      <Footer />
    </header>
  );
}
