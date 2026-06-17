import { Heart, ShieldCheck, Sparkles, Award, Briefcase } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const CORE_VALUES = [
  { icon: Heart, label: 'Compassion' },
  { icon: ShieldCheck, label: 'Integrity' },
  { icon: Sparkles, label: 'Trust' },
  { icon: Award, label: 'Excellence' },
  { icon: Briefcase, label: 'Professionalism' },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface-soft relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="About Curamed"
          title={<>Compassion-Driven <span className="gradient-text">Healthcare Excellence</span></>}
          subtitle="Curamed Services India is committed to providing trusted healthcare support through compassionate service, professional expertise, and patient-focused care solutions."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <Reveal direction="right">
            <div className="glass-light rounded-3xl p-8 h-full">
              <div className="inline-flex px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-semibold">
                Our Mission
              </div>
              <p className="mt-4 text-xl font-display font-semibold text-dark-900 leading-snug">
                To make quality healthcare support accessible and reliable for every family.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="glass-light rounded-3xl p-8 h-full">
              <div className="inline-flex px-3 py-1 rounded-full bg-primary-teal text-white text-xs font-semibold">
                Our Vision
              </div>
              <p className="mt-4 text-xl font-display font-semibold text-dark-900 leading-snug">
                To become India's most trusted healthcare support services brand.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {CORE_VALUES.map((value, i) => (
            <Reveal key={value.label} delay={i * 0.05}>
              <div className="glass-light rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white">
                  <value.icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-sm font-semibold text-dark-900">{value.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}