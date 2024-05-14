import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import InHouseProd from "./components/InHouseProd/InHouseProd";
import Gallery from "./components/Gallery/Gallery";
import ContactPage from "./components/ContactPage/ContactPage";
  
function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/inHouseProd" element={<InHouseProd />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
