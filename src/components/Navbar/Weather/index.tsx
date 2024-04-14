'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './weather.module.scss';
import Pill from '@/components/Pill';

const Weather = () => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(null);

  async function getWeatherData() {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=New Delhi`,
        { mode: 'cors', method: 'GET' }
      );
      const responseData = await response.json();

      if (responseData.current) {
        setTemp(responseData.current.temp_c);
        setIcon(responseData.current.condition.icon);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!icon) {
    return null;
  }

  return (
    <div className="center">
      <Pill className={styles.weathcap}>
        <span>Delhi</span>
        <Image src={`https:${icon}`} height={16} width={16} alt="weather" />
      </Pill>
      <Pill className={styles.weathcap}>
        <p>
          <span> {temp}°C</span>
        </p>
      </Pill>
    </div>
  );
};

export default Weather;
