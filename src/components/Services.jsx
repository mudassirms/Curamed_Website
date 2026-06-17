import {
  FlaskConical,
  Microscope,
  Users,
  ClipboardList,
  Activity,
  Stethoscope,
  BookOpen,
  Network,
  ArrowUpRight,
} from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const SERVICES = [
  { icon: FlaskConical, title: 'Early Phase Solutions', desc: 'Specialized support for Phase I and early-stage clinical trials with precision and compliance.' },
  { icon: Microscope, title: 'Clinical Development', desc: 'End-to-end clinical development services ensuring efficiency, quality, and regulatory adherence.' },
  { icon: Users, title: 'Patient Recruitment & Retention', desc: 'Patient-centric strategies to build diverse trial populations and maintain high retention rates.' },
  { icon: ClipboardList, title: 'Site Management', desc: 'Comprehensive site management services that bridge sponsors, CROs, and investigative sites.' },
  { icon: Activity, title: 'Clinical Trial Liaisons', desc: 'PharmD and medically qualified liaisons providing expert on-site and remote trial support.' },
  { icon: Stethoscope, title: 'Sponsor & CRO Partnerships', desc: 'Strategic partnerships with pharmaceutical companies and CROs for seamless trial execution.' },
  { icon: BookOpen, title: 'Patient Education Programs', desc: 'Tailored education initiatives that empower patients and improve informed consent quality.' },
  { icon: Network, title: 'Healthcare Provider Network', desc: 'A growing network of medical professionals across India ensuring wide trial reach.' },
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
          title="Integrated Clinical Trial Solutions"
          title={<>Integrated <span className="gradient-text">Clinical Trial Solutions</span></>}
          subtitle="Everything you need for world-class clinical research operations, under one trusted SMO."
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