import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./Pages/Accueil"


function App() {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
        </Routes>
      </div>
  );
}

export default App;
