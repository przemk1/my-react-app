import "./App.css";
import Home from "./home/Home";
import Calculators from "./calculators/Calculators";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <Router>
      <div class="app">
        <div class="BG"></div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/calculators" element={<Calculators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
