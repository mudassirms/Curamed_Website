import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock4, Send, CheckCircle2 } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'

const CONTACT_INFO = [
  { icon: Phone, label: 'Phone', value: '+91 80501 07353' },
  { icon: Mail, label: 'Email', value: 'curamedservices.india@gmail.com' },
  { icon: MapPin, label: 'Office Address', value: 'Near Eagle English Medium Shool, Uchgaon, Kolhapur, Maharashtra, India' },
  { icon: Clock4, label: 'Support Hours', value: '24/7 Emergency Assistance Available' },
]

const SERVICE_OPTIONS = [
  'Home Nursing Care',
  'Patient Care Services',
  'Elderly Care',
  'Physiotherapy At Home',
  'Medical Attendant Services',
  'Home Diagnostic Support',
  'Doctor Consultation Support',
  'Medical Equipment Assistance',
  'Other',
]

const initialForm = { name: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    // UI-only demo: this marketing site is static and has no backend.
    // Connect this handler to your form/email service of choice to receive leads.
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad bg-surface-soft relative">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Plan Your Care"
          subtitle="Tell us what you need — a care advisor will reach out to guide the next steps."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left: info */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-dark-900 p-8 md:p-9 flex flex-col">
              <h3 className="font-display font-bold text-white text-xl">Contact Information</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Reach out anytime — our care advisors are ready to help.
              </p>
              <div className="mt-8 space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-sky">
                      <info.icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {info.label}
                      </p>
                      <p className="mt-1 text-sm text-slate-200 leading-relaxed">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="h-full rounded-3xl bg-white border border-slate-200/70 shadow-card p-8 md:p-9 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full min-h-[22rem] flex flex-col items-center justify-center text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/10 text-accent-green">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 font-display font-bold text-dark-900 text-lg">
                      Thank You, {form.name.split(' ')[0] || 'there'}!
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 max-w-xs">
                      We've received your request. A care advisor will reach out shortly.
                    </p>
                    <button
                      onClick={() => { setForm(initialForm); setSubmitted(false) }}
                      className="mt-6 text-sm font-semibold text-primary hover:underline"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="grid sm:grid-cols-2 gap-5"
                  >
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-dark-900 mb-2">Full Name</label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-200 bg-surface-soft px-4 py-3 text-sm text-dark-900 placeholder:text-slate-400 outline-none transition-colors focus:border-primary/50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark-900 mb-2">Phone Number</label>
                      <input
                        required
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full rounded-xl border border-slate-200 bg-surface-soft px-4 py-3 text-sm text-dark-900 placeholder:text-slate-400 outline-none transition-colors focus:border-primary/50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark-900 mb-2">Email Address</label>
                      <input
                        required
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-surface-soft px-4 py-3 text-sm text-dark-900 placeholder:text-slate-400 outline-none transition-colors focus:border-primary/50 focus:bg-white"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-dark-900 mb-2">Service Required</label>
                      <select
                        required
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-surface-soft px-4 py-3 text-sm text-dark-900 outline-none transition-colors focus:border-primary/50 focus:bg-white"
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-dark-900 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us a little about your care requirement..."
                        className="w-full rounded-xl border border-slate-200 bg-surface-soft px-4 py-3 text-sm text-dark-900 placeholder:text-slate-400 outline-none transition-colors focus:border-primary/50 focus:bg-white resize-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <button type="submit" className="btn-primary w-full sm:w-auto">
                        Send Request
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
