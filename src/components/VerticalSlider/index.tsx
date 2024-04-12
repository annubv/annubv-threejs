import React, { useEffect } from 'react';
import style from './verti.module.scss';

interface IVerticalSliderProps {
  text: string;
}

const VerticalSlider = ({ text }: IVerticalSliderProps) => {
  return (
    <div className={`${style.verticalslider}`}>
      <div className={`${style.text}`}>{text}</div>
    </div>
  );
};

export default VerticalSlider;
