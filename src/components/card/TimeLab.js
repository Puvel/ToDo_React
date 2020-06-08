import React from 'react';
import styles from './card.module.css';
import * as helpers from '../../helpers/functions';

const TimeLab = ({ date }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const pad = value => {
    return String(value).padStart(2, '0');
  };
  const dataString = new Date(date);
  const actualHours = dataString.getHours();
  const actualMinutes = dataString.getMinutes();
  const fullDate =
    months[dataString.getMonth()] +
    ' ' +
    pad(dataString.getDate()) +
    ', ' +
    pad(actualHours) +
    ':' +
    pad(actualMinutes);
  console.log(fullDate);

  const today = helpers.isToday(dataString);
  const tomorrow = helpers.isTomorrow(dataString);

  const actualTime = () => {
    if (today) {
      return `Today, ${pad(actualHours)}:${pad(actualMinutes)}`;
    } else if (tomorrow) {
      return `Tomorrow, ${pad(actualHours)}:${pad(actualMinutes)}`;
    } else {
      return `${fullDate}`;
    }
  };

  return <p className={styles.cardDate}>{actualTime()}</p>;
};

export default TimeLab;
