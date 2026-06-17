export default function GlowOrbs({ variant = 'light' }) {
  const base = variant === 'dark' ? 'opacity-40' : 'opacity-60'
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${base}`} aria-hidden="true">
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-24 w-[24rem] h-[24rem] rounded-full bg-accent-sky/25 blur-3xl animate-float-delay" />
      <div className="absolute bottom-0 left-1/3 w-[20rem] h-[20rem] rounded-full bg-primary-teal/20 blur-3xl animate-float" />
    </div>
  )
}
