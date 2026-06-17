import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const TESTIMONIALS = [
  {
    name: 'Dr. Ramesh Kulkarni',
    relation: 'Principal Investigator, Pune',
    service: 'Site Management',
    quote: 'Curamed Services India made our trial operations seamless. Their coordinators are thorough, proactive, and kept us fully compliant at every step.',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    name: 'Priya Mehta',
    relation: 'Clinical Operations Head, Mumbai',
    service: 'Patient Recruitment',
    quote: 'The patient recruitment team at Curamed Services India exceeded our enrolment targets two months ahead of schedule. Their community reach is unmatched.',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    name: 'Arun Nair',
    relation: 'CRO Partner, Bengaluru',
    service: 'Clinical Trial Liaison',
    quote: 'Working with Curamed Services India\'s PharmD liaisons elevated the quality of our site communications and dramatically reduced protocol deviations.',
    avatar: 'https://i.pravatar.cc/120?img=51',
  },
  {
    name: 'Dr. Sneha Joshi',
    relation: 'Oncologist, Hyderabad',
    service: 'Oncology Trial Support',
    quote: 'Curamed Services India understood the nuances of oncology trials. Their patient-centric approach meant participants felt informed and supported throughout.',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    name: 'Vikram Sharma',
    relation: 'Pharma Sponsor, Delhi',
    service: 'Early Phase Solutions',
    quote: 'From feasibility to first patient in, Curamed Services India delivered with precision. Their 85% on-time completion rate is a real competitive advantage.',
    avatar: 'https://i.pravatar.cc/120?img=45',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => setActive(((index % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length)

  const current = TESTIMONIALS[active]

  return (
    <section id="testimonials" className="section-pad bg-white relative overflow-hidden">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Real Stories"
          title={<>Trusted By <span className="gradient-text">Sponsors, CROs & Patients</span></>}
          subtitle="Experiences shared by the partners and patients we've had the privilege to work with."
        />

        <Reveal direction="scale" className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brand opacity-15 blur-3xl rounded-[3rem]" />

            <div className="relative rounded-[2rem] glass-light p-8 md:p-12">
              <Quote className="h-10 w-10 text-primary opacity-40" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <p className="mt-4 text-lg md:text-xl text-dark-900 font-medium leading-relaxed">
                    "{current.quote}"
                  </p>
                  <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={current.avatar}
                        alt={current.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-white shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-display font-bold text-dark-900 text-sm">{current.name}</p>
                        <p className="text-xs text-slate-500">{current.relation} · {current.service}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => goTo(active - 1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full glass-light hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-gradient-brand' : 'w-2 bg-dark-900/20'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => goTo(active + 1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full glass-light hover:bg-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}