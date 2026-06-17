import {
  Cross,
  Sparkles,
  Activity,
  Baby,
  Dumbbell,
  Hourglass,
  Home,
  Handshake,
} from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const PROGRAMS = [
  { icon: Cross, title: 'Post-Surgery Recovery Care', desc: 'Skilled support through every stage of healing.' },
  { icon: Sparkles, title: 'Elderly Wellness Care', desc: 'Daily wellness, mobility & companionship for seniors.' },
  { icon: Activity, title: 'Chronic Disease Support', desc: 'Ongoing management for diabetes, cardiac & more.' },
  { icon: Baby, title: 'Mother & Baby Care', desc: 'Postnatal support for new mothers and infants.' },
  { icon: Dumbbell, title: 'Physiotherapy Recovery Program', desc: 'Structured rehabilitation to restore movement.' },
  { icon: Hourglass, title: 'Long-Term Patient Care', desc: 'Continuous, dependable care for extended needs.' },
  { icon: Home, title: 'Home Healthcare Support', desc: 'Clinical-grade care delivered to your doorstep.' },
  { icon: Handshake, title: 'Assisted Recovery Services', desc: 'Hands-on assistance through every recovery milestone.' },
]

export default function CarePrograms() {
  return (
    <section id="programs" className="section-pad bg-white relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Structured Care"
          title={<>Programs built around <span className="gradient-text">life moments.</span></>}
          subtitle="Targeted programs that adapt to specific health journeys — from recovery to long-term wellbeing."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={(i % 4) * 0.07} className="h-full">
              <div className="group relative h-full glass-light rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(10,132,255,0.35)]">
                <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg">
                  <program.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 font-display font-bold text-dark-900 text-base leading-snug">
                  {program.title}
                </h3>
                <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">
                  {program.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}