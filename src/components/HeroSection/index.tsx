'use client';

import React, { useRef, useState } from 'react';
import ThreeCanvas from './ThreeCanvas';
import styles from './hero.module.scss';
import Pill from '../Pill';
import { Barlow } from '@/styles/font';
import QRCode from 'react-qr-code';

const PUB_LINK = process.env.NEXT_PUBLIC_CLIENT_URL ?? '';

const HeroSection = () => {
  const parRef: any = useRef();
  const [hovElement, setHovElement] = useState('');

  function handleHovElement(newVal: string) {
    setHovElement(newVal);
  }
  function clearHovElement() {
    setHovElement('');
  }

  return (
    <section className={`${styles.heroSectionWrapper} pos-r`} ref={parRef}>
      <ThreeCanvas
        parentRefs={[parRef]}
        hovElement={hovElement}
        canvClass={`${styles.maskWrapper} pos-a center`}
      />

      <div className={`${styles.mainContent} pos-a`}>
        <h2
          onMouseEnter={() => {
            handleHovElement('name');
          }}
          onMouseLeave={clearHovElement}
        >
          Hi, I&apos;m Anubhav
        </h2>

        <div className={`${styles.contentBottom}`}>
          <div className={styles.aboutsection}>
            <Pill>
              <p>こんにちは</p>
            </Pill>

            <p className={`${styles.aboutcontent} ${Barlow.className}`}>
              Versatile software developer adept at both frontend and backend.
              Passionate about design and skilled in collaborative environments.
              Let&apos;s build exceptional digital experiences together.
            </p>
          </div>

          <div
            className={`${styles.qrContainer} center`}
            onMouseEnter={() => {
              handleHovElement('qr');
            }}
            onMouseLeave={clearHovElement}
          >
            <QRCode
              className={styles.qrBox}
              value={PUB_LINK}
              size={100}
              bgColor="var(--ottoman)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
