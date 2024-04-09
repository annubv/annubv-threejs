import Navbar from '@/components/Navbar';
import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection';
// import ThreeCanvas from '@/components/ThreeCanvas';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}
