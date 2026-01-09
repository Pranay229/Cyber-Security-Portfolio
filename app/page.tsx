import Navigation from '@/components/Navigation';
import CyberBackground from '@/components/CyberBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import AISecurityShowcase from '@/components/sections/AISecurityShowcase';
import Reports from '@/components/sections/Reports';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      <CyberBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISecurityShowcase />
        <Reports />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
