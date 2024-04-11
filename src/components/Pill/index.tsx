import React from 'react';
import styles from './pill.module.scss';
import BorderSvg from '../Svg/BorderSvg';
import { SourceCode } from '@/styles/font';

interface IPillProps {
  children: any;
  className?: string;
}

const Pill = ({ children, className }: IPillProps) => {
  return (
    <div
      className={`${styles.pill} ${SourceCode.className} ${className} center`}
    >
      <BorderSvg />
      {children}
    </div>
  );
};

export default Pill;
