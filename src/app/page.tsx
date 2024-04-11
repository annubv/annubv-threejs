import Navbar from '@/components/Navbar';
import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
// import ThreeCanvas from '@/components/ThreeCanvas';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
