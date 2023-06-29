import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateProvider } from "./contexts/StateContext";
import { AuthFunctionProvider } from "./contexts/AuthFunctionContext";
import { DetailsPhoneProvider } from "./contexts/DetailsPhoneContext";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/EspaceAdmin/EspaceAdmin";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Stock from "./pages/Stock/Stock";
import Calculator from "./components/Calculator/Calculator";

import "./App.scss";
import "./reset.scss";

function App() {
  return (
    <StateProvider>
      <AuthFunctionProvider>
        <DetailsPhoneProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reset" element={<PasswordReset />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/not-found" element={<NotFoundPage />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </Router>
        </DetailsPhoneProvider>
      </AuthFunctionProvider>
    </StateProvider>
  );
}

export default App;
