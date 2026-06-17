/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A84FF',
          cyan: '#00C2FF',
          teal: '#14B8A6',
        },
        dark: {
          900: '#0F172A',
          800: '#111827',
          700: '#1E293B',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
          softer: '#F1F5F9',
        },
        accent: {
          green: '#22C55E',
          sky: '#38BDF8',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body: ['Inter', '"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0A84FF 0%, #00C2FF 55%, #14B8A6 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(10,132,255,0.12) 0%, rgba(0,194,255,0.10) 55%, rgba(20,184,166,0.12) 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0F172A 0%, #111827 100%)',
        'gradient-radial-glow': 'radial-gradient(circle at 50% 0%, rgba(0,194,255,0.25), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(0,194,255,0.45)',
        card: '0 10px 40px -10px rgba(15,23,42,0.12)',
        'card-dark': '0 10px 40px -10px rgba(0,0,0,0.45)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1.5s infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        dash: 'dash 3.2s linear infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        dash: {
          to: { strokeDashoffset: -400 },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
