import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Activity, FlaskConical } from "lucide-react";
import heroImg from "/hero.jpg";

const HERO_STATS = [
  { value: "2023", label: "Established" },
  { value: "6+", label: "Cities Covered" },
  { value: "85%", label: "On-Time Study Completion" },
];

function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-20 md:pb-28"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full bg-primary/25 blur-3xl animate-pulseGlow" />
        <div className="absolute top-[20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-primary-cyan/25 blur-3xl animate-pulseGlow" />
        <div className="absolute bottom-[-20%] left-[30%] h-[400px] w-[400px] rounded-full bg-primary-teal/20 blur-3xl animate-pulseGlow" />
        <div className="absolute inset-0 bg-gradient-radial-glow" />
      </div>

      <div className="container-xl relative grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            Integrated Clinical Research. Powered By Data & Compassion.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="heading-xl mt-6"
          >
            Clinical Research <br className="hidden sm:block" />
            <span className="gradient-text animate-gradientShift bg-[length:200%_200%]">
              Redefined For India.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="body-lg mt-6 max-w-xl"
          >
            Curamed Services India (CSI) is India's leading Site
            Management Organization — bridging pharmaceutical companies, healthcare
            providers, and patients to deliver breakthrough treatment options.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <button onClick={() => scrollTo("#contact")} className="group btn-primary">
              Partner With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="text-base font-semibold text-dark-900 hover:text-primary transition-colors"
            >
              Explore Services
            </button>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-primary">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: photographic visual with floating status chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="absolute -inset-6 bg-gradient-brand opacity-30 blur-3xl rounded-[3rem] animate-pulseGlow" />

          <div className="relative rounded-[2.2rem] overflow-hidden glass-light p-2 shadow-glow">
            <img
              src={heroImg}
              alt="Curamed Services India research team"
              width={1536}
              height={1280} 
              className="w-full h-auto rounded-[1.8rem] object-cover"
            />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 sm:-left-10 top-10 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl max-w-[13rem]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Activity className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-xs text-slate-500 whitespace-nowrap">Study Progress</p>
              <p className="text-sm font-semibold text-dark-900 whitespace-nowrap">
                85% On-Time Rate
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 sm:-right-6 bottom-8 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl max-w-[14rem]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-xs text-slate-500 whitespace-nowrap">Verified SMO</p>
              <p className="text-sm font-semibold text-dark-900 whitespace-nowrap">
                Est. July 2023
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-6 -top-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-xl"
          >
            <FlaskConical className="h-4 w-4 text-primary fill-primary/20" />
            <span className="text-xs font-semibold text-dark-900 whitespace-nowrap">
              Clinical Excellence
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}