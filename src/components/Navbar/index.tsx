import React from 'react';
import styles from './nav.module.scss';
import Time from './Time';
import Weather from './Weather';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} full-width center space-between`}>
      <p>Anubhav Singh</p>

      <div className={`${styles.locifo} center`}>
        <Weather />
        <Time />
      </div>
    </nav>
  );
};

export default Navbar;
