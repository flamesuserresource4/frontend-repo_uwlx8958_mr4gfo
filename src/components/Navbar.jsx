import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 text-white" aria-label="Responsible Pet Foundation home">
            <span className="inline-block h-3 w-3 rounded-full bg-cyan-400" />
            <span className="font-semibold">Responsible Pet Foundation</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#mission" className="hover:text-white">Mission</a>
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#impact" className="hover:text-white">Impact</a>
          </nav>
          <button className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20 md:hidden" aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
