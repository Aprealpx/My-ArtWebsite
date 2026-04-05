import Navbar from './Components/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import PixelArt from './Pages/PixelArt';
import DigitalArt from './Pages/DigitalArt';

export default function App() {
  return (
    <Router>
      <div className="h-screen bg-white overflow-x-hidden">
        <Navbar />

        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/pixel" element={<PixelArt />} />
            <Route path="/digital" element={<DigitalArt />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

