import React from 'react';
import styles from './hero.module.scss';
import ThreeCanvas from '../ThreeCanvas';

const HeroSection = () => {
  return (
    <section className={`${styles.heroSectionWrapper} pos-r`}>
      <h2>Hi, I&apos;m Anubhav</h2>

      <div className={`${styles.maskWrapper} pos-a`}>
        <ThreeCanvas />
      </div>
    </section>
  );
};

export default HeroSection;
