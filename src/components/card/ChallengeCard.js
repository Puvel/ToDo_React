import React from 'react';
import Select from 'react-select';
import styles from './card.module.css';
import chroma from 'chroma-js';
import trophyIcon from '../../assets/images/icons/trophy.svg';

const colourOptions = [
  { value: 'Hard', label: 'Hard', color: '#DB0837' },
  { value: 'Normal', label: 'Normal', color: '#FC842C' },
  { value: 'Easy', label: 'Easy', color: '#00875A' },
];
const categoryOptions = [
  { value: 'stuff', label: 'Stuff', color: 'rgb(248,229,212)' },
  { value: 'learning', label: 'Learning', color: 'rgb(252, 242, 183)' },
  { value: 'health', label: 'Health', color: 'rgb(204, 247, 255)' },
  { value: 'work', label: 'Work', color: 'rgb(211, 246, 206)' },
  { value: 'leisure', label: 'Leisure', color: 'rgb(238, 216, 242)' },
  { value: 'productivity', label: 'Productivity', color: 'rgb(209, 225, 246)' },
  { value: 'social', label: 'Social', color: 'rgb(233, 192, 203)' },
  { value: 'sport', label: 'Sport', color: 'rgb(186, 241, 229)' },
];
const getGroup = {
  Stuff: categoryOptions[0],
  Learning: categoryOptions[1],
  Health: categoryOptions[2],
  Work: categoryOptions[3],
  Leisure: categoryOptions[4],
  Productivity: categoryOptions[5],
  Social: categoryOptions[6],
  Sport: categoryOptions[7],
  Stuff: categoryOptions[8],
};
const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',
  backgroundColor: 'rgb(32, 57, 90)',
  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});
const getDifficulty = {
  Easy: colourOptions[2],
  Normal: colourOptions[1],
  Hard: colourOptions[0],
};
export const ChallengeCard = ({
  task: { _id, dueDate, name, difficulty, group },
}) => {
  const hours = new Date(dueDate);
  const actualHours = hours.getHours();
  const actualMinutes = hours.getMinutes();
  return (
    <li className={styles.challengeCardMain}>
      <div className={styles.challengeHardLevelContainer}>
        <div className={styles.selectContainer}>
          <Select
            value={getDifficulty[difficulty]}
            options={colourOptions}
            defaultValue={colourOptions[0]}
            styles={colourStyles}
            className={styles.cardSelect}
          />
        </div>
        <div className={styles.starContainer}>
          <img
            className={styles.cardStarIcon}
            src={trophyIcon}
            width="16px"
            height="auto"
            alt="star"
          />
        </div>
      </div>
      <h4 className={styles.challenge}>challenge</h4>
      <h3 className={styles.challengrCardTitle}>{name}</h3>
      <div className={styles.textCont}>
        <p className={styles.cardDate}>
          by :{actualHours}:{actualMinutes}
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.sel}>
          <Select
            value={getGroup[group]}
            options={categoryOptions}
            className={styles.cardSelectCategory}
            defaultValue={categoryOptions[5]}
            styles={backgroundcolourStyles}
          />
        </div>
        <div className={styles.imgCont}>
          <button className={styles.btnDel}>
            <svg
              className={styles.delite}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
          <span className=" css-1okebmr-indicatorSeparator"></span>
          <button className={styles.btn}>START</button>
        </div>
      </div>
    </li>
  );
};
const colourStyles = {
  control: styles => ({ ...styles, color: 'red' }),
  // option: (styles, { data,isSelected}) =>
  //   ({ ...styles, ...dot(data.color) }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      ...dot(data.color),
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? color.alpha(0.3).css()
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white')
          ? 'white'
          : '#ccc'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
const col = (color = '#ccc') => ({
  padding: '10px',
  paddingRight: '20px',
  backgroundColor: color,
  boxShadow: `0 10px ${color})`,
  borderRadius: '0 60px 60px 0',
});
const backgroundcolourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'color' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, '#ccc')
          ? 'black'
          : '#ccc'
        : color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...col() }),
  placeholder: styles => ({ ...styles, ...col() }),
  singleValue: (styles, { data }) => ({ ...styles, ...col(data.color) }),
};
