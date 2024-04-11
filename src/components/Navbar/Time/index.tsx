'use client';

import React, { useState } from 'react';
import styles from './time.module.scss';
import { SourceCode } from '@/styles/font';

const Time = () => {
  const [time, setTime] = useState(new Date());

  React.useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className={`${styles.timecap}  ${SourceCode.className} pos-r center`}>
      <svg fill="none" viewBox="0 0 86 24" className="pos-a">
        <path
          d="M7.237 23.5.5 16.764V7.237L7.237.5h71.526L85.5 7.237v9.527L78.763 23.5H7.237Z"
          stroke="#484B45"
        ></path>
      </svg>
      <div className={styles.datetime}>
        <span className={styles.hours}>{time.getHours()}</span>
        <span className={styles.flash}>:</span>
        <span className={styles.mins}>
          {time.getMinutes().toString().padStart(2, '0')}
        </span>
        <span className={styles.tz}>
          &nbsp;{getTimeZoneAbbreviation(time.getTimezoneOffset())}
        </span>
      </div>
    </div>
  );
};

export default Time;

const TIME_ABBR: Record<string, string> = {
  '-720': 'IDLW', // International Date Line West
  '-660': 'SST', // Samoa Standard Time
  '-600': 'HST', // Hawaii Standard Time
  '-570': 'MART', // Marquesas Time
  '-540': 'AKST', // Alaska Standard Time
  '-480': 'PST', // Pacific Standard Time
  '-420': 'MST', // Mountain Standard Time
  '-360': 'CST', // Central Standard Time
  '-300': 'EST', // Eastern Standard Time
  '-240': 'AST', // Atlantic Standard Time
  '-210': 'HADT', // Hawaii-Aleutian Daylight Time
  '-180': 'AKDT', // Alaska Daylight Time
  '-120': 'PDT', // Pacific Daylight Time
  '-60': 'MDT', // Mountain Daylight Time
  '0': 'GMT', // Greenwich Mean Time
  '60': 'CET', // Central European Time
  '120': 'EET', // Eastern European Time
  '180': 'MSK', // Moscow Standard Time
  '210': 'IRST', // Iran Standard Time
  '240': 'GST', // Gulf Standard Time
  '270': 'AFT', // Afghanistan Time
  '300': 'IST', // Indian Standard Time
  '330': 'IST', // Indian Standard Time (note: this is the same as above, but for better accuracy)
  '345': 'NPT', // Nepal Time
  '360': 'BST', // Bangladesh Standard Time
  '390': 'MMT', // Myanmar Time
  '420': 'ICT', // Indochina Time
  '480': 'CST', // China Standard Time
  '510': 'ACST', // Australian Central Standard Time
  '525': 'CAST', // Central Australian Standard Time
  '540': 'JST', // Japan Standard Time
  '570': 'ACDT', // Australian Central Daylight Time
  '600': 'AEST', // Australian Eastern Standard Time
  '630': 'LHST', // Lord Howe Standard Time
  '660': 'AEDT', // Australian Eastern Daylight Time
  '690': 'NFT', // Norfolk Time
  '720': 'NZST', // New Zealand Standard Time
  '765': 'CHADT', // Chatham Island Daylight Time
  '780': 'LINT', // Line Islands Time
};

function getTimeZoneAbbreviation(offset: number) {
  // Negate the offset before looking up the abbreviation
  const negatedOffset = -offset;
  return TIME_ABBR[negatedOffset.toString()] || '';
}
