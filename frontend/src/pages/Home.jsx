import { useContext } from "react";
import Navbar from "../components/Navbar";
import AuthFunctionContext from "../contexts/AuthFunctionContext";
import "../styles/Home.scss";

export default function Home() {
  const { userToken } = useContext(AuthFunctionContext);

  return (
    // (userInfo.is_admin === 0 || userInfo.is_admin === 1) &&
    userToken && (
      <div className="home">
        <p>Home</p>
        <Navbar />
      </div>
    )
  );
}
