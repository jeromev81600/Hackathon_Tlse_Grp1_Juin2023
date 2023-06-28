import React from "react";
import Home from "./pages/Home";
import StockPhones from "./components/StockComponent/StockComponent";

import "./App.scss";
import "./reset.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <StockPhones />
      <p>coucou</p>
    </div>
  );
}

export default App;
