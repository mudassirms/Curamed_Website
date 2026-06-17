import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const STEPS = [
  { num: '01', title: 'Choose Service', desc: 'Browse and select the care your family needs.' },
  { num: '02', title: 'Speak With Expert', desc: 'A care advisor understands your requirements.' },
  { num: '03', title: 'Care Plan Assessment', desc: 'We design a personalized plan around you.' },
  { num: '04', title: 'Receive Professional Care', desc: 'A verified professional begins your care journey.' },
]

export default function Process() {
  return (
    <section className="section-pad bg-surface-soft relative overflow-hidden">
      <div className="container-xl">
        <SectionHeading
          eyebrow="How It Works"
          title={<>Healthcare In <span className="gradient-text">Four Simple Steps</span></>}
          subtitle="From the first call to ongoing care, we make the process simple and transparent."
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