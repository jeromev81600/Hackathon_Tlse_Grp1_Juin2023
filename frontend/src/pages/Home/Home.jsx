import { useContext } from "react";
import AuthFunctionContext from "../../contexts/AuthFunctionContext";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbarold/Navbar";
import "./Home.scss";

function Home() {
  const { userToken } = useContext(AuthFunctionContext);

  return (
    // (userInfo.is_admin === 0 || userInfo.is_admin === 1) &&
    userToken && (
      <div className="home">
        <Navbar />
        <Footer />
      </div>
    )
  );
}

export default Home;
