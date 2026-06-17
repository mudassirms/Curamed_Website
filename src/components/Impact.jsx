import { Users, Stethoscope, MapPin, Smile, Clock4 } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import AnimatedCounter from './ui/AnimatedCounter.jsx'
import GlowOrbs from './ui/GlowOrbs.jsx'
import PulseLine from './ui/PulseLine.jsx'

const IMPACT_STATS = [
  { icon: Users, value: 15000, suffix: '+', label: 'Patients Served' },
  { icon: Stethoscope, value: 800, suffix: '+', label: 'Care Professionals' },
  { icon: MapPin, value: 50, suffix: '+', label: 'Cities Covered' },
  { icon: Smile, value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { icon: Clock4, value: 24, suffix: '/7', label: 'Support Availability' },
]

export default function Impact() {
  return (
    <section className="relative bg-gradient-dark py-20 md:py-24 overflow-hidden">
      <GlowOrbs variant="dark" />
      <PulseLine className="absolute top-0 left-0 h-10 opacity-30" />

      <div className="container-xl relative">
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-accent-sky">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-sky animate-pulseGlow" />
            Our Impact
          </span>
          <h2 className="heading-lg mt-4 text-white">
            Numbers That Reflect Our Commitment
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} direction="up" className="text-center">
              <div className="glass-dark rounded-3xl py-9 px-4 h-full flex flex-col items-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-sky mb-4">
                  <stat.icon className="h-5 w-5" />
                </span>
                <div className="font-display font-extrabold text-3xl md:text-4xl text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs md:text-sm text-slate-400 font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
