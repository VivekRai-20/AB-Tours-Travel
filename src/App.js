import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/Pages/About.jsx";
import Home from "./components/Pages/Home.jsx";
import Service from "./components/Pages/Service.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Tour from "./components/Pages/Tour.jsx"; // Page listing all tours

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/service" element={<Service />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/tour" element={<Tour />} /> {/* Shows all tours */}
  <Route path="/tour/:id" element={<Tour />} /> {/* FIX: Use Tour instead of TourDisplay */}
</Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
