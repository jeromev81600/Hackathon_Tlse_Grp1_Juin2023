import { useContext } from "react";
import AuthFunctionContext from "../../contexts/AuthFunctionContext";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";

function Home() {
  const { userToken } = useContext(AuthFunctionContext);

  return (
    // (userInfo.is_admin === 0 || userInfo.is_admin === 1) &&
    userToken && (
      <div className="home">
        <NavBar />
        <Footer />
      </div>
    )
  );
}

export default Home;
