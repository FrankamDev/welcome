import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "./components/Hero";
import Programme from "./components/Programme";
import Details from "./components/Details";
import RSVP from "./components/RSVP";
import CouplePhoto from "./components/CouplePhoto";
import LocalisationSection from "./components/LocalisationSection";
import Colors from "./components/Colors";
import Gallery from "./components/Gallery";
import FloatingGalleryButton from "./components/FloatingGalleryButton ";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-gray-800 font-lora overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[url('https://images.unsplash.com/photo-1519741497674-...')] opacity-5 bg-cover bg-center mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="relative z-10"
      >
        <Hero />
        <LocalisationSection />
        <Programme />
        <Details />
        <Colors />
        <RSVP />
        <CouplePhoto />
      </motion.div>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <BrowserRouter>
     <FloatingGalleryButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;