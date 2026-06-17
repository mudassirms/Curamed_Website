import { ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const ROLES = [
  { title: 'Nurses', desc: 'Deliver compassionate clinical care at home.' },
  { title: 'Physiotherapists', desc: 'Help patients recover with expert guidance.' },
  { title: 'Caregivers', desc: 'Support patients with daily living and dignity.' },
  { title: 'Healthcare Coordinators', desc: 'Coordinate care plans and family communication.' },
  { title: 'Support Staff', desc: 'Power the operations behind exceptional care.' },
]

export default function Careers() {
  return (
    <section id="careers" className="section-pad bg-surface-soft relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Careers At Curamed"
          title={<>Build a career in<span className="gradient-text">Healthcare That Matters</span></>}
          subtitle="Join a growing network of healthcare professionals delivering compassionate, high-quality care across India."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <div className="group glass-light rounded-3xl p-6 h-full transition-all duration-300 hover:-translate-y-1.5">
                <div className="text-xs font-semibold tracking-wider text-primary uppercase">
                  Open Role
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-dark-900">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{role.desc}</p>
                <a
                  href="mailto:careers@curamedservices.in"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold gradient-text"
                >
                  Apply
                  <ArrowRight className="h-4 w-4 text-primary" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.15} className="mt-12 text-center">
          <a
            href="#contact"
            className="btn-primary"
          >
            Join Our Team
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}