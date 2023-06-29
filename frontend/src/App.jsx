import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.scss";
import "./reset.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <p>coucou</p>
      <NotFoundPage />
    </div>
  );
}

export default App;
