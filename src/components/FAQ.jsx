import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const FAQS = [
  {
    q: 'What services do you provide?',
    a: 'We provide home nursing, patient care, elderly care, physiotherapy, medical attendants, home diagnostic support, and doctor consultation assistance — all delivered at home.',
  },
  {
    q: 'How do I request support?',
    a: 'Simply reach out through our contact form or call our support line, and a care advisor will guide you through the next steps.',
  },
  {
    q: 'Are healthcare professionals verified?',
    a: 'Yes. Every nurse, caregiver, and attendant in our network is background-verified and trained before being matched with a family.',
  },
  {
    q: 'Which locations do you serve?',
    a: 'We currently support families across 50+ cities in India, with our care network expanding continuously.',
  },
  {
    q: 'What care programs are available?',
    a: 'From post-surgery recovery to long-term patient care, mother & baby care, and chronic disease support — we offer structured programs for every stage of care.',
  },
  {
    q: 'How do I contact your team?',
    a: 'You can reach us by phone, email, or the contact form below. Our team typically responds within a few hours.',
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
          subtitle="Everything you need to know before getting started with Curamed."
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
