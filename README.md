# Curamed Services India — Marketing Website

A premium, futuristic marketing website for Curamed Services India, a home healthcare
brand. Built with plain JavaScript React (no TypeScript), Vite, Tailwind CSS, Framer
Motion, and lucide-react icons.

This is a **static, front-end-only marketing site**. There is no backend, database,
authentication, booking system, patient portal, admin dashboard, or payment gateway —
exactly as specified in the brief. The contact form is UI-only and shows a success
state locally; wire it up to your email/CRM provider of choice when you're ready to
collect real leads.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build is written to `dist/` and can be deployed to any static host
(Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

## Project structure

```
src/
  components/
    ui/              Reveal, AnimatedCounter, PulseLine, GlowOrbs, SectionHeading
    Header.jsx        Sticky glass navigation
    Hero.jsx          Full-screen hero with animated visual
    TrustSection.jsx
    Services.jsx       8 core services
    WhyChooseUs.jsx
    CarePrograms.jsx   8 structured care programs
    Process.jsx        4-step animated timeline
    Impact.jsx          Dark stats section with animated counters
    Testimonials.jsx    Auto-rotating testimonial slider
    About.jsx           Mission, vision, core values
    Careers.jsx
    FAQ.jsx             Accordion
    Contact.jsx         Split layout + static lead form
    Footer.jsx
  App.jsx
  index.css           Tailwind layer + shared utility classes
  main.jsx
tailwind.config.js     Color palette, fonts, animations from the brief
```

## Design tokens

- **Colors**: `#0A84FF`, `#00C2FF`, `#14B8A6` (primary/gradient), `#0F172A` /
  `#111827` (dark), `#22C55E` / `#38BDF8` (accent) — all wired into
  `tailwind.config.js` as `primary`, `primary-teal`, `dark-900`, `accent-green`,
  `accent-sky`, etc.
- **Type**: Plus Jakarta Sans for display/headings, Inter for body text (both loaded
  via Google Fonts in `index.html`).
- **Signature motif**: a continuously animating "vital pulse" (ECG-style) line —
  `components/ui/PulseLine.jsx` — used as a divider in the Impact section and above
  the Contact section, echoing the healthcare/vitals theme.

## Things to swap before launch

- Replace the placeholder phone number, email, and office address in
  `Contact.jsx` and `Footer.jsx` with real details.
- The hero and "Why Choose Curamed" visuals are built from glass-effect panels and
  icons rather than real photography (to avoid placeholder/broken image links). Swap
  in real team and patient photography where you'd like a more photographic feel.
- Connect `Contact.jsx`'s `handleSubmit` to a form backend (e.g. your own API,
  Formspree, or an email service) when you're ready to receive real leads — this was
  intentionally left out per the "no backend" requirement.
- Update social links in `Footer.jsx` to your real profiles.
