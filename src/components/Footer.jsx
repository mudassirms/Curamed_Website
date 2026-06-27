import { Linkedin, } from 'lucide-react'

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Care Programs', href: '#programs' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Early Phase Solutions', href: '#services' },
      { label: 'Clinical Development', href: '#services' },
      { label: 'Patient Recruitment & Retention', href: '#services' },
      { label: 'Site Management', href: '#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQs', href: '#contact' },
      { label: 'Patient Stories', href: '#testimonials' },
      { label: 'Care Process', href: '#home' },
      { label: 'Contact Support', href: '#contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '+91 80501 07353', href: 'tel:+918050107353' },
      { label: '+91 75073 15050', href: 'tel:+917507315050' },
      { label: 'curamedservices.india@gmail.com', href: 'mailto:curamedservices.india@gmail.com' },
      { label: 'Near Eagle English Medium Shool, Uchgaon, Kolhapur, Maharashtra, India', href: '#contact' },
    ],
  },
]

const SOCIALS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/curamed-curamedservices-india-790360347?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
]

function handleClick(e, href) {
  if (href.startsWith('#')) {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-slate-400 pt-16 pb-8 relative overflow-hidden">
      <div className="container-xl relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2.5">
              <img src="/logo_footer.png" alt="Curamed Services India logo" className="h-14 w-14 object-contain" />
              <span className="font-display font-bold text-white text-lg">Curamed Services India</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Advanced healthcare. Delivered with compassion. Trusted home healthcare across 50+ cities in India.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:bg-gradient-brand hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-display font-bold text-white text-sm mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-sm hover:text-accent-sky transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Curamed Services India. All Rights Reserved.</p>

          <p>
            Crafted by{' '}
            <a
              href="https://www.linkedin.com/in/mudassir269251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 font-medium hover:underline"
            >
              Mudassir Sanderwale
            </a>
          </p>

          <div className="flex items-center gap-5">
            <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hover:text-accent-sky transition-colors">Privacy Policy</a>
            <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hover:text-accent-sky transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}