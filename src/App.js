import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./Pages/Accueil"
import Details from "./Pages/Details";
import Login from "./Pages/Login";


function App() {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </div>
  );
}

export default App;
