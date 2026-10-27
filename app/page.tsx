import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f1f2ec] selection:bg-[#c6ff3d] selection:text-[#0b0c0e]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Timeline />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
