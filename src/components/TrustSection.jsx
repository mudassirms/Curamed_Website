import { BadgeCheck, ShieldCheck, Clock4, Network, Award } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

const TRUST_ITEMS = [
  { icon: BadgeCheck, title: 'Qualified Clinical Liaisons', desc: 'PharmD & medically qualified professionals managing every trial.' },
  { icon: ShieldCheck, title: 'Regulatory Compliant', desc: 'Processes built to global ICH-GCP and Indian regulatory standards.' },
  { icon: Clock4, title: '85% On-Time Delivery', desc: 'Consistent on-time study start and completion across sites.' },
  
  { icon: Network, title: 'Pan-India Site Network', desc: 'Coordinated clinical operations spanning 50+ cities.' },
]

export default function TrustSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-xl">
        <Reveal>
          <div className="glass-light rounded-3xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="h-full">
                <div className="group flex flex-col items-center text-center gap-3 h-full p-4 rounded-2xl transition-colors duration-300 hover:bg-white/70">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <p className="font-display font-bold text-sm md:text-[15px] text-dark-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed hidden md:block">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}