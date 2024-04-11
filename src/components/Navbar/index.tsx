import React from 'react';
import styles from './nav.module.scss';
import Time from './Time';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} full-width center space-between`}>
      <p>Anubhav Singh</p>
      <Time />
    </nav>
  );
};

export default Navbar;
