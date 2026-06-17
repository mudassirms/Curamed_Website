import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const STEPS = [
  { num: '01', title: 'Discuss Your Trial', desc: 'Reach out and share your clinical trial goals and therapeutic area.' },
  { num: '02', title: 'Feasibility Assessment', desc: 'Our team evaluates site readiness, patient population, and compliance requirements.' },
  { num: '03', title: 'Customised Trial Plan', desc: 'We design a tailored site management and recruitment strategy around your protocol.' },
  { num: '04', title: 'Trial Execution & Reporting', desc: 'Our clinical liaisons and coordinators manage execution with real-time visibility.' },
]

export default function Process() {
  return (
    <section className="section-pad bg-surface-soft relative overflow-hidden">
      <div className="container-xl">
        <SectionHeading
          eyebrow="How It Works"
          title={<>From Protocol To Patient In <span className="gradient-text">Four Steps</span></>}
          subtitle="From the first conversation to trial completion, we make clinical research operations simple, transparent, and efficient."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08} direction="up">
                <div className="relative glass-light rounded-3xl p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand text-white text-xl font-bold shadow-glow">
                    {step.num}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-dark-900 text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}