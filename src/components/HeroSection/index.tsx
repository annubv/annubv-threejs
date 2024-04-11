'use client';

import React, { useRef } from 'react';
import styles from './hero.module.scss';
import ThreeCanvas from './ThreeCanvas';

const HeroSection = () => {
  const ref: any = useRef();

  return (
    <section className={`${styles.heroSectionWrapper} pos-r`} ref={ref}>
      <div className={`${styles.maskWrapper} pos-a center`}>
        <ThreeCanvas parentRef={ref} />
      </div>

      <div className={`${styles.mainContent} pos-a`}>
        <h2>Hi, I&apos;m Anubhav</h2>
      </div>
    </section>
  );
};

export default HeroSection;
