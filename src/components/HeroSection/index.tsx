import React from 'react';
import styles from './hero.module.scss';
import ThreeCanvas from '../ThreeCanvas';

const HeroSection = () => {
  return (
    <section className={`${styles.heroSectionWrapper} pos-r`}>
      <div className={`${styles.maskWrapper} pos-a center`}>
        <ThreeCanvas />
      </div>

      <div className={styles.mainContent}>
        <h2>Hi, I&apos;m Anubhav</h2>
      </div>
    </section>
  );
};

export default HeroSection;
