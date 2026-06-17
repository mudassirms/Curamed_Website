import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const FAQS = [
  {
    q: 'What is Curamed Services India and what does it do?',
    a: 'Curamed Services India is a leading Site Management Organization (SMO) established in July 2023. We bridge the gap between pharmaceutical companies, CROs, healthcare providers, and patients to deliver efficient, compliant, and patient-centric clinical trial solutions across India.',
  },
  {
    q: 'What clinical research services does Curamed Services India offer?',
    a: 'We offer a comprehensive range of services including Early Phase Solutions, Clinical Development support, Patient Recruitment & Retention, Site Management, Clinical Trial Liaison services (PharmD & medically qualified), Sponsor & CRO partnerships, and Patient Education programs.',
  },
  {
    q: 'How do I partner with Curamed Services India for a clinical trial?',
    a: 'Reach out through our contact form or email us directly. Our team will conduct a feasibility assessment, understand your protocol requirements, and design a customised site management and recruitment plan tailored to your trial.',
  },
  {
    q: 'Which cities and sites does Curamed Services India operate in?',
    a: 'We currently operate across 50+ cities in India, with a continuously expanding network of investigative sites and healthcare professionals to support diverse patient recruitment and trial execution needs.',
  },
  {
    q: 'What is Curamed Services India\'s track record on trial timelines?',
    a: 'We maintain an 85% on-time study start and completion rate across our trials — a benchmark we achieve through rigorous planning, proactive site management, and experienced clinical liaisons.',
  },
  {
    q: 'Has Curamed Services India received any industry recognition?',
    a: 'Yes. Curamed Services India was recognised among the "10 Most Promising Drug Discovery & Development Companies 2023" by Silicon India magazine, and has been featured in leading publications including The Times of India, Economic Times Health World, Express Pharma, and First Post.',
  },
  {
    q: 'How does Curamed Services India approach patient recruitment?',
    a: 'We take a patient-centric approach — focusing on patient education, diverse and inclusive trial populations, and strong engagement strategies that drive both enrolment and long-term retention throughout the study.',
  },
  {
    q: 'How can I get in touch with the Curamed Services India team?',
    a: 'You can contact us through the form below or reach out via email. Our team typically responds within a few business hours and will connect you with the right clinical operations expert for your needs.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-pad bg-white relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before partnering with Curamed Services India for your clinical trial."
        />

        <div className="max-w-2xl mx-auto space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border bg-white transition-colors duration-300 ${
                    isOpen ? 'border-primary/30 shadow-card' : 'border-slate-200/70'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-dark-900 text-sm md:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-gradient-brand text-white rotate-180' : 'bg-slate-100 text-dark-900'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}