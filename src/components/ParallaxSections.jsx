import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-extrabold text-white sm:text-5xl">{value}</div>
    <div className="mt-1 text-sm text-white/70">{label}</div>
  </div>
);

const ParallaxSections = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  useEffect(() => {
    // nothing for now
  }, []);

  return (
    <div ref={ref} className="relative z-10 w-full bg-slate-950">
      {/* Section 1: Mission */}
      <section id="mission" className="relative overflow-hidden py-24">
        <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Responsible, Transparent, Compassionate</h2>
              <p className="mt-4 text-white/80">
                We ensure every pet is healthy, vaccinated, and matched with the right family. A portion of each sale powers rescue operations, training, and community education.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" /> Health & vaccination records</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-pink-400" /> Ethical breeder partnerships</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" /> Post-adoption support</li>
              </ul>
            </div>
            <motion.div style={{ y: y2 }} className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-yellow-500/20 p-1">
              <div className="h-full w-full rounded-[1rem] bg-slate-900/60 backdrop-blur-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Catalog callout */}
      <section id="catalog" className="relative overflow-hidden py-24">
        <motion.div style={{ y: y2 }} className="pointer-events-none absolute -top-24 right-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[1,2,3].map((i) => (
                <motion.div key={i} style={{ y: y1 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900" />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">Happy Pup {i}</h3>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">Vaccinated</span>
                    </div>
                    <p className="mt-1 text-sm text-white/70">2 years • Friendly • Trained</p>
                    <button className="mt-4 w-full rounded-xl bg-white px-4 py-2 text-slate-900 transition hover:-translate-y-0.5">View details</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Impact stats */}
      <section className="relative overflow-hidden py-24">
        <motion.div style={{ y: y3 }} className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 backdrop-blur-xl">
            <div className="grid gap-8 sm:grid-cols-3">
              <Stat value="1,200+" label="Pets rehomed" />
              <Stat value="$350k" label="Funds donated" />
              <Stat value="95%" label="Successful matches" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSections;
