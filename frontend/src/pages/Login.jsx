import React from "react";
import Authentication from "../components/Authentication";
import "../styles/Login.scss";

export default function Login() {
  return (
    <div className="authentication-container">
      <h1 className="title-connection">
        <p>Connectez vous à</p>
        <p>votre compte</p>
      </h1>
      <div className="auth-user-admin">
        <Authentication />
      </div>
    </div>
  );
}
