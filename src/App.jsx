// src/App.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Clock } from 'lucide-react';
import Hero from './components/Hero';
import Programme from './components/Programme';
import Details from './components/Details';
import RSVP from './components/RSVP';
import CouplePhoto from './components/CouplePhoto';

function App() {
  useEffect(() => {
    // Optionnel : smooth scroll global
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-gray-800 font-lora overflow-x-hidden">
      {/* Overlay subtil pour ambiance */}
      <div className="fixed inset-0 pointer-events-none bg-[url('https://images.unsplash.com/photo-1519741497674-...')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="relative z-10"
      >
        <Hero />
        <Programme />
        <Details />
        <RSVP />
        <CouplePhoto />
      </motion.div>
    </div>
  );
}

export default App;