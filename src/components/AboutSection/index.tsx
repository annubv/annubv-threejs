import React from 'react';
import Image from 'next/image';
import styles from './about.module.scss';
import { Barlow } from '@/styles/font';
import Pill from '../Pill';
import landProfile from '../../../public/landProfile.webp';
import immoPic from '../../../public/immo.png';
import proPic from '../../../public/profile.webp';

const AboutSection = () => {
  return (
    <section className={styles.aboutsection}>
      <div className={styles.descContainer}>
        <Pill>
          <p>안녕하세요</p>
        </Pill>
        <div className="align-center">
          <h2 className={`${Barlow.className}`}>
            नमस्ते! I&apos;M ANUBHAV SINGH.
          </h2>
          <Image
            className={styles.profilePic}
            src={landProfile}
            alt="profile-landscape"
            height={96}
          />
        </div>

        <h2 className={`${Barlow.className}`}>WEB DEVELOPER/ ENGINEER/</h2>

        <div className="align-center">
          <h2 className={`${Barlow.className}`}>HOBBYIST GAMER.</h2>
          <Image src={immoPic} alt="profile-landscape" height={96} />
        </div>
      </div>

      <div className={`${styles.bottomAboutContainer} space-between-end`}>
        <div className={styles.infoContainer}>
          <Pill>
            <p>INFO</p>
          </Pill>

          <p className={`${Barlow.className} ${styles.infoText}`}>
            I like to work on everything! Frontend, Backend, Art, Design.
            Currently experimenting with Kafka. We can talk about tech,
            entertainment, gaming and football. Humble brag - I peaked Immortal
            2 in Valorant.
          </p>
        </div>

        <Image
          className={styles.mainProfilePic}
          src={proPic}
          alt="profile-landscape"
          height={500}
        />
      </div>
    </section>
  );
};

export default AboutSection;
