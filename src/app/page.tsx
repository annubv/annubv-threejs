import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
