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
        © 2025 Responsible Pet Foundation — Funding crisis housing, first-six-weeks support, emergency vet care, advocacy, and public education.
      </footer>
    </div>
  );
}

export default App;
