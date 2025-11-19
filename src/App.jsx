import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParallaxSections from './components/ParallaxSections';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <ParallaxSections />
      <footer className="relative z-10 border-t border-white/10 bg-black/40 py-10 text-center text-white/70">
        © 2025 PetSales Responsible Foundation — Doing good, one adoption at a time.
      </footer>
    </div>
  );
}

export default App;
