import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateProvider } from "./contexts/StateContext";
import { AuthFunctionProvider } from "./contexts/AuthFunctionContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/EspaceAdmin/EspaceAdmin";
import "./App.scss";
import "./reset.scss";

export default function App() {
  return (
    <StateProvider>
      <AuthFunctionProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<PasswordReset />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthFunctionProvider>
    </StateProvider>
  );
}
