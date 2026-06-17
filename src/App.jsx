import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustSection from './components/TrustSection.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import CarePrograms from './components/CarePrograms.jsx'
import Process from './components/Process.jsx'
import Impact from './components/Impact.jsx'
import Testimonials from './components/Testimonials.jsx'
import About from './components/About.jsx'
import Careers from './components/Careers.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import PulseLine from './components/ui/PulseLine.jsx'
import WhatsAppButton from './components/WhatsAppButton'


export default function App() {
  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <CarePrograms />
        <Process />
        <Impact />
        <Testimonials />
        <About />
        <Careers />
        <FAQ />
        <div className="bg-surface-soft">
          <PulseLine className="h-12" opacity={0.7} />
        </div>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
