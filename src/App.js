import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import Trending from "./Components/Trending";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
