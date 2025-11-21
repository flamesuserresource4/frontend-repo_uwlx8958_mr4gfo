import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline full-bleed animated background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil so text stays legible (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center text-white sm:px-8 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-md"
        >
          Responsible Pet Foundation • Keeping pets and families together
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
        >
          We raise funds for pets in crisis, emergency vet care, and safe rehoming
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          From the critical first six weeks to unexpected emergencies, we provide rapid support so pets stay healthy and families feel supported.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#programs" className="rounded-xl bg-white px-6 py-3 text-slate-900 shadow-lg shadow-white/20 transition hover:-translate-y-0.5 hover:shadow-xl">
            Explore Programs
          </a>
          <a href="#donate" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-md transition hover:bg-white/20">
            Donate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
