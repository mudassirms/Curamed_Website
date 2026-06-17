import { Heart, ShieldCheck, Sparkles, Award, Briefcase } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const CORE_VALUES = [
  { icon: Heart, label: 'Patient-Centric' },
  { icon: ShieldCheck, label: 'Integrity' },
  { icon: Sparkles, label: 'Innovation' },
  { icon: Award, label: 'Excellence' },
  { icon: Briefcase, label: 'Professionalism' },
]

// CSI India leadership team
const LEADERSHIP = [
  {
    name: 'Mohammad Gazali Ismailmagdum',
    role: 'Co-Founder & Manager',
    focus: 'Specialises in Clinical Operations, clinical trials, and patient-centric solutions with over four years of experience in clinical research.',
  },
  {
    name: 'Sandesh Mane',
    role: 'Co-Founder & Manager, Clinical Operations',
    focus: 'Bridges the gap between Sponsors/CROs and sites, over 6 years of experience in clinical research, fostering collaborations with medical professionals across India.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface-soft relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="About Curamed Services India"
          title={<>Shifting the Clinical Research <span className="gradient-text">Paradigm</span></>}
          subtitle="Curamed Services India (CSI) is a leading Site Management Organization bridging the gap between healthcare providers, pharmaceutical companies, and patients across India — established July 2023."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <Reveal direction="right">
            <div className="glass-light rounded-3xl p-8 h-full">
              <div className="inline-flex px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-semibold">
                Our Mission
              </div>
              <p className="mt-4 text-xl font-display font-semibold text-dark-900 leading-snug">
                To redefine clinical research by combining research expertise, data insights, and patient perspectives — delivering breakthrough treatment options across India.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="glass-light rounded-3xl p-8 h-full">
              <div className="inline-flex px-3 py-1 rounded-full bg-primary-teal text-white text-xs font-semibold">
                Our Vision
              </div>
              <p className="mt-4 text-xl font-display font-semibold text-dark-900 leading-snug">
                To become India's most trusted and innovative Site Management Organization, solving complex clinical development challenges with efficiency, compliance, and quality.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Leadership */}
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {LEADERSHIP.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 0.08}>
              <div className="glass-light rounded-3xl p-7 h-full">
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {leader.role}
                </div>
                <h3 className="font-display font-bold text-dark-900 text-lg">{leader.name}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{leader.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core Values */}
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