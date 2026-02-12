import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Quote from "./pages/Quote";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pl-5">
      <Navbar />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
