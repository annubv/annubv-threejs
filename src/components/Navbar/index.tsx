import React from 'react';
import styles from './nav.module.scss';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} full-width center space-between`}>
      <p>Anubhav Singh</p>
      <p>Yo</p>
    </nav>
  );
};

export default Navbar;
