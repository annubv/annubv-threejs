import React from 'react';
import styles from './foot.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer} align-center`}>
      <ul className="align-center">
        <li>
          <a href="https://www.linkedin.com/in/annubv/">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:annubv25@gmail.com">Mail</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
