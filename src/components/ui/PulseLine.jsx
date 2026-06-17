export default function PulseLine({ className = '', strokeWidth = 2.5, opacity = 1 }) {
  return (
    <div className={`overflow-hidden w-full ${className}`} aria-hidden="true">
      <svg
        className="h-full animate-marquee"
        style={{ width: '200%' }}
        viewBox="0 0 800 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A84FF" />
            <stop offset="50%" stopColor="#00C2FF" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 L130,40 L150,40 L166,8 L183,72 L199,28 L213,40 L400,40
             M400,40 L530,40 L550,40 L566,8 L583,72 L599,28 L613,40 L800,40"
          fill="none"
          stroke="url(#pulseGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        />
      </svg>
    </div>
  )
}
