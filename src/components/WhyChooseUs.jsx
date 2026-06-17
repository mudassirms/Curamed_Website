import { Check } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import img from '/why-choose.jpg'

const BENEFITS = [
  'Experienced Healthcare Professionals',
  'Personalized Care Plans',
  'Compassionate Service Approach',
  'Quality Healthcare Standards',
  'Fast Response Time',
  'Transparent Service Process',
  'Trusted Patient Support',
  'Nationwide Reach',
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-surface-soft relative overflow-hidden">
      <div className="container-xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal direction="right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-25 blur-3xl rounded-[3rem]" />
            <div className="relative rounded-[2rem] overflow-hidden glass-light p-2">
              <img
                src={img}
                alt="Physiotherapist helping elderly patient"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full h-auto rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Curamed"
            title={<>Compassionate Care, <span className="gradient-text">Engineered For Trust</span></>}
            subtitle="We pair professional expertise with a human touch — so families feel supported every step of the way."
          />

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.04}>
                <div className="flex items-start gap-3 glass-light rounded-2xl px-4 py-3">
                  <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-white shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-dark-900">{benefit}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}