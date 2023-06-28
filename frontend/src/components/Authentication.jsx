import React, { useState, useContext } from "react";
import axios from "axios";
import "../styles/Authentication.scss";
import { useNavigate } from "react-router-dom";
import AuthFunctionContext from "../contexts/AuthFunctionContext";

export default function Authentication() {
  const { setUser, setUserInfo } = useContext(AuthFunctionContext);
  const credentials = window.location.href.split("/").at(-1);

  // regex definition for mail user
  const regexMail = /^$|^[a-zA-Z0-9._%+-@]+$/;

  // useState definition
  const [mail, setMail] = useState("");
  const [warningMail, setWarningMail] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [failAuth, setFailAuth] = useState(false);

  const navigate = useNavigate();

  // submit handler for the form
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const dataFromForm = Object.fromEntries(formData.entries());
    if (credentials === "login") {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/login`, dataFromForm)
        .then((response) => {
          if (response.data.token) {
            setUser(response.data.token);
            setUserInfo(response.data.user);
            console.info(response.data.token, response.data.user);
            navigate("/");
          } else {
            console.info(response);
          }
        })
        .catch((error) => {
          console.error(error.message);
          setFailAuth(true);
        });
    }
  };

  // handler for change in input patient mail
  const handleMailChange = (event) => {
    if (regexMail.test(event.target.value)) {
      setMail(event.target.value);
      setWarningMail(false);
    } else {
      setWarningMail(true);
    }
  };

  // handler for change in password input
  const handlePasswordChange = (event) => setPassword(event.target.value);

  // toggle to change type input for password to show it if user click on the SHOW button
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const authenticationType = () => {
    return (
      <>
        <label htmlFor="mail">Mail</label>
        <input
          name="mail"
          id="mail"
          type="text"
          autoComplete="true"
          value={mail}
          onChange={handleMailChange}
        />
        {warningMail ? (
          <p className="warning-username">
            Le nom d'utilisateur doit être un mail
          </p>
        ) : (
          <p className="description-username">
            Votre nom d'utilisateur est votre mail fournit à votre inscription
          </p>
        )}
      </>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="connection">
        <div className="connection-input">{authenticationType()}</div>
        <div className="password-input">
          <label htmlFor="password">Mot de passe</label>
          <div className="password-input-and-show">
            <input
              name="password"
              id="password"
              autoComplete="current-password"
              type={!passwordShown ? "password" : "text"}
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              onClick={togglePassword}
              type="button"
              className="hide-or-show-button"
            >
              <i
                id="pw-icon-show-hide"
                className={
                  passwordShown ? "fi fi-rr-eye-crossed" : "fi fi-rr-eye"
                }
                alt="button to show or hide password"
              />
            </button>
          </div>
        </div>
        <button type="submit" className="connection-button">
          SE CONNECTER
        </button>
      </form>
      {failAuth && (
        <div>
          <button
            className="bg-fail-auth-modal"
            type="button"
            onClick={() => setFailAuth(false)}
            label="close fail authentication modal"
          />
          <div className="fail-auth-modal">
            <button
              className="exit-modal-fail-button"
              type="button"
              onClick={() => setFailAuth(false)}
            >
              <i className="fi fi-rr-cross-small" />
            </button>
            <p>Les champs renseignés ne correspondent pas.</p>
            <p>Veuillez réessayer.</p>
          </div>
        </div>
      )}
    </div>
  );
}
