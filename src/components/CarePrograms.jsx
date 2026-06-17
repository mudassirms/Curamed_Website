import {
  FlaskConical,
  Users,
  Activity,
  HeartHandshake,
  Stethoscope,
  BookOpen,
  BarChart2,
  ShieldCheck,
} from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const PROGRAMS = [
  { icon: FlaskConical, title: 'Phase I Early-Stage Trials', desc: 'First-in-human studies with precision safety monitoring and compliance.' },
  { icon: BarChart2, title: 'Phase II Efficacy Studies', desc: 'Structured patient cohort management to evaluate treatment efficacy.' },
  { icon: Activity, title: 'Phase III Pivotal Trials', desc: 'Large-scale, multi-site trial coordination for regulatory submissions.' },
  { icon: Users, title: 'Patient Recruitment Program', desc: 'Diverse, ethical patient sourcing across 50+ cities in India.' },
  { icon: HeartHandshake, title: 'Patient Retention Program', desc: 'Engagement-driven strategies that keep participants committed throughout trials.' },
  { icon: Stethoscope, title: 'Oncology Trial Support', desc: 'Specialized clinical and operational support for cancer clinical studies.' },
  { icon: BookOpen, title: 'Patient Education Initiative', desc: 'Empowering patients with knowledge to improve consent quality and adherence.' },
  { icon: ShieldCheck, title: 'Regulatory & Compliance Program', desc: 'End-to-end compliance management meeting global regulatory standards.' },
]

export default function CarePrograms() {
  return (
    <section id="programs" className="section-pad bg-white relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Trial Programs"
          title={<>Programs built for every <span className="gradient-text">phase of research.</span></>}
          subtitle="Targeted clinical programs designed to adapt to each phase and therapeutic area — from early-stage trials to patient retention and regulatory compliance."
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