'use client';

import React, { useRef } from 'react';
import ThreeCanvas from './ThreeCanvas';
import styles from './hero.module.scss';
import Pill from '../Pill';
import { Barlow } from '@/styles/font';

const HeroSection = () => {
  const ref: any = useRef();

  return (
    <section className={`${styles.heroSectionWrapper} pos-r`} ref={ref}>
      <div className={`${styles.maskWrapper} pos-a center`}>
        <ThreeCanvas parentRef={ref} />
      </div>

      <div className={`${styles.mainContent} pos-a`}>
        <div>
          <h2>Hi, I&apos;m Anubhav</h2>
        </div>

        <div className={`${styles.contentBottom}`}>
          <div className={styles.aboutsection}>
            <Pill>
              <p>こんにちは</p>
            </Pill>

            <p className={`${styles.aboutcontent} ${Barlow.className}`}>
              A COLLABORATIVE VISUAL DESIGNER AND ART DIRECTOR WITH A FOCUS ON
              DIGITAL EXPERIENCES AND INTERFACES. BASED IN ZAGREB, WORKING WITH
              CLIENTS WORLDWIDE. CURRENTLY DESIGN DIRECTOR AT Studio Null.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
