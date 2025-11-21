import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-extrabold text-white sm:text-5xl">{value}</div>
    <div className="mt-1 text-sm text-white/70">{label}</div>
  </div>
);

const InitiativeCard = ({ title, desc, color = 'from-slate-800 to-slate-900', id }) => (
  <motion.a
    href={`#${id}`}
    whileHover={{ y: -4 }}
    className="group block overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
  >
    <div className={`aspect-[4/3] bg-gradient-to-br ${color}`} />
    <div className="p-5">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <div className="mt-3 inline-flex items-center gap-2 text-xs text-cyan-300">
        <span className="opacity-80">Learn more</span>
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </div>
  </motion.a>
);

const ParallaxSections = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  useEffect(() => {
    // no-op
  }, []);

  return (
    <div ref={ref} className="relative z-10 w-full bg-slate-950">
      {/* Section 1: Programs Overview */}
      <section id="programs" className="relative overflow-hidden py-24">
        <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Direct support when it matters most</h2>
              <p className="mt-4 text-white/80">
                We focus on three core aid areas and two community pillars: pets in crisis housing, the first six-week retention window, an emergency vet fund, advocacy and policy reform, and public education and awareness.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" /> Pets-in-crisis temporary housing</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-pink-400" /> First-6-weeks rehoming & retention support</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" /> Emergency Vet Fund for urgent treatment</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Advocacy & Policy Reform</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" /> Public Education & Awareness</li>
              </ul>
            </div>
            <motion.div style={{ y: y2 }} className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-yellow-500/20 p-1">
              <div className="h-full w-full rounded-[1rem] bg-slate-900/60 backdrop-blur-md" />
            </motion.div>
          </div>

          {/* Initiatives Grid including Advocacy & Education */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InitiativeCard
              id="crisis-housing"
              title="Pets in Crisis Housing"
              desc="Short-term placements that keep animals safe while families stabilize."
              color="from-cyan-700/30 to-cyan-900/30"
            />
            <InitiativeCard
              id="first-six-weeks"
              title="First Six Weeks Support"
              desc="Groceries, supplies, and counseling to prevent avoidable surrenders."
              color="from-fuchsia-700/30 to-fuchsia-900/30"
            />
            <InitiativeCard
              id="emergency-vet"
              title="Emergency Vet Fund"
              desc="Rapid grants for urgent medical treatment when time matters."
              color="from-amber-700/30 to-amber-900/30"
            />
            <InitiativeCard
              id="advocacy"
              title="Advocacy & Policy Reform"
              desc="Coalition-building to advance humane, evidence-based local policies."
              color="from-emerald-700/30 to-emerald-900/30"
            />
            <InitiativeCard
              id="education"
              title="Public Education & Awareness"
              desc="Workshops, campaigns, and resources that empower responsible care."
              color="from-indigo-700/30 to-indigo-900/30"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Get Involved / Donate */}
      <section id="donate" className="relative overflow-hidden py-24">
        <motion.div style={{ y: y2 }} className="pointer-events-none absolute -top-24 right-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[{title:'Pets in Crisis', cta:'Fund a night'}, {title:'First 6 Weeks', cta:'Back a family'}, {title:'Emergency Vet Fund', cta:'Cover treatment'}].map((p, i) => (
                <motion.div key={p.title} style={{ y: y1 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900" />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">{p.title}</h3>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">Open</span>
                    </div>
                    <p className="mt-1 text-sm text-white/70">Your gift directly supports families and pets staying safely together.</p>
                    <div className="mt-4 flex gap-2">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl bg-white px-4 py-2 text-center text-slate-900 transition hover:-translate-y-0.5">{p.cta}</a>
                      <a href="#impact" className="flex-1 rounded-xl border border-white/20 px-4 py-2 text-center text-white/90 transition hover:bg-white/10">Why it matters</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Advocacy & Education support blurb */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-white/80">
                Want to amplify systemic change? You can also designate gifts to <a href="#advocacy" className="text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-200">Advocacy & Policy Reform</a> or <a href="#education" className="text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-200">Public Education & Awareness</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Advocacy & Policy Reform */}
      <section id="advocacy" className="relative overflow-hidden py-24">
        <motion.div style={{ y: y1 }} className="pointer-events-none absolute -top-24 left-10 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div style={{ y: y1 }} className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Advocacy & Policy Reform</h3>
              <p className="mt-4 text-white/80">
                We partner with shelters, public health, and civic leaders to promote policies that keep pets with their people: pet-inclusive housing, crisis boarding support, and access to basic veterinary care.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Pet-inclusive housing guidelines</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Crisis boarding funding models</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /> Low-cost veterinary access</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#donate" className="rounded-xl bg-white px-5 py-3 text-slate-900 transition hover:-translate-y-0.5">Support this work</a>
                <a href="#contact" className="rounded-xl border border-white/20 px-5 py-3 text-white/90 transition hover:bg-white/10">Join our coalition</a>
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="order-1 aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 p-1 md:order-2">
              <div className="h-full w-full rounded-[1rem] bg-slate-900/60 backdrop-blur-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Public Education & Awareness */}
      <section id="education" className="relative overflow-hidden py-24">
        <motion.div style={{ y: y2 }} className="pointer-events-none absolute -top-24 right-10 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div style={{ y: y2 }} className="order-2">
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Public Education & Awareness</h3>
              <p className="mt-4 text-white/80">
                We run workshops, campaigns, and resource hubs that empower families with practical knowledge—covering behavior basics, emergency planning, and affordable care.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <h4 className="font-semibold text-white">Community Workshops</h4>
                  <p className="mt-1 text-sm text-white/70">Free monthly sessions with trainers and vets.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <h4 className="font-semibold text-white">Resource Library</h4>
                  <p className="mt-1 text-sm text-white/70">Step-by-step guides for common challenges.</p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#donate" className="rounded-xl bg-white px-5 py-3 text-slate-900 transition hover:-translate-y-0.5">Sponsor a workshop</a>
                <a href="#impact" className="rounded-xl border border-white/20 px-5 py-3 text-white/90 transition hover:bg-white/10">See results</a>
              </div>
            </motion.div>
            <motion.div style={{ y: y3 }} className="order-1 aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-700/10 p-1">
              <div className="h-full w-full rounded-[1rem] bg-slate-900/60 backdrop-blur-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Impact stats */}
      <section id="impact" className="relative overflow-hidden py-24">
        <motion.div style={{ y: y3 }} className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 backdrop-blur-xl">
            <div className="grid gap-8 sm:grid-cols-3">
              <Stat value="1,200+" label="Nights of safe housing" />
              <Stat value="$350k" label="Emergency care funded" />
              <Stat value="95%" label="Retention after 6 weeks" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSections;
