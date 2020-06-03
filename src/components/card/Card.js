import React from 'react';
import Select from 'react-select'
import styles from './card.module.css';
import chroma from "chroma-js";
import starIcon from '../../assets/images/icons/star.svg'; 
import fireIcon from '../../assets/images/icons/fire.svg'



const colourOptions = [
    { value: 'hard', label: 'Hard', color: '#db0837' },
    { value: 'normal', label: 'Normal', color: '#fc842c' },
    { value: 'easy', label: 'Easy', color: '#00875A' },
  ];
const categoryOptions=[
  { value: 'stuff', label: 'Stuff'},
  { value: 'learning', label: 'Learning'},
  { value: 'health', label: 'Health' },
  { value: 'work', label: 'Work' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'productivity', label: 'Productivity' },
  { value: 'social', label: 'Social' },
  { value: 'sport', label: 'Sport' }
]

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10
      }
})


export const Card=()=>{
    return(
        <li className={styles.cardMain}>
        <div className={styles.hardLevelContainer}>
        <Select options={colourOptions} 
                className={styles.cardSelect} 
                defaultValue={colourOptions[0]}
                styles={colourStyles}/>
        <img className={styles.cardStarIcon} src={starIcon} width="16px" height="auto" alt="star"/>
        </div>
        <h3 className={styles.cardTitle}>Submit report</h3>
            <div className={styles.textCont}>
            <p className={styles.cardDate}>Today 7:30</p>
            {/* <button className={styles.cardStyleStar}></button> */}
            <img className={styles.cardFireIcon} src={fireIcon} width="16px" height="auto" alt="star"/>
            </div>
            <Select options={categoryOptions} 
                className={styles.cardSelectCategory}/>
        </li>
    )
}


const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
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
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },

  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
};
