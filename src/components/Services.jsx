import {
  Stethoscope,
  HeartHandshake,
  Accessibility,
  Activity,
  UserRound,
  FlaskConical,
  PhoneCall,
  Wrench,
  ArrowUpRight,
} from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const SERVICES = [
  { icon: Stethoscope, title: 'Home Nursing Care', desc: 'Professional nursing support delivered in the comfort of your home.' },
  { icon: HeartHandshake, title: 'Patient Care Services', desc: 'Dedicated caregivers providing attentive day-to-day patient assistance.' },
  { icon: Accessibility, title: 'Elderly Care', desc: 'Compassionate senior citizen support with dignity and warmth.' },
  { icon: Activity, title: 'Physiotherapy At Home', desc: 'Personalized recovery and rehabilitation, on your schedule.' },
  { icon: UserRound, title: 'Medical Attendant Services', desc: 'Trained healthcare attendants for round-the-clock assistance.' },
  { icon: FlaskConical, title: 'Home Diagnostic Support', desc: 'Convenient healthcare assistance and sample coordination at home.' },
  { icon: PhoneCall, title: 'Doctor Consultation Support', desc: 'Professional healthcare guidance whenever you need it.' },
  { icon: Wrench, title: 'Medical Equipment Assistance', desc: 'Support for setting up and managing essential medical equipment.' },
]

function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,theme(colors.slate.100),transparent_70%)]" />
      <div className="container-xl">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive Healthcare Services"
          subtitle="Everything you need for professional healthcare support, under one trusted brand."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.07} className="h-full">
              <button
                onClick={() => scrollTo('#contact')}
                className="group relative h-full w-full text-left glass-light rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(10,132,255,0.35)]"
              >
                <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 font-display font-bold text-dark-900 text-lg leading-snug">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold gradient-text">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}