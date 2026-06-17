import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`max-w-3xl ${alignClass} mb-14 md:mb-16`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${dark ? 'glass-dark text-slate-300' : 'glass text-slate-500'}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] ${dark ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}