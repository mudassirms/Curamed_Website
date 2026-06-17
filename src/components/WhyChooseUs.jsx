import { Check } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import img from '/why-choose.jpg'

const BENEFITS = [
  'Experienced Clinical Research Professionals',
  'Integrated Site Management Operations',
  'Patient-Centric Trial Design',
  'Global Regulatory Compliance',
  'Fast Site Start-Up Times',
  'Transparent Trial Reporting',
  'Trusted Sponsor & CRO Partnerships',
  'Pan-India Site Network',
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
                alt="Curamed Services India clinical research operations"
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
            eyebrow="Why Curamed Services India"
            title={<>Research Expertise, <span className="gradient-text">Built On Trust</span></>}
            subtitle="We combine clinical know-how with data-driven strategies and a patient-first philosophy — so sponsors and CROs get the results they need, and patients receive the care they deserve."
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