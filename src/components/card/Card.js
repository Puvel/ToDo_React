import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { editCard, deleteCard } from "../../redux/dashBoard/cardOperation";
import styles from "./card.module.css";
import chroma from "chroma-js";
import starIcon from "../../assets/images/icons/star.svg";
import fireIcon from "../../assets/images/icons/fire.svg";
const colourOptions = [
  { value: "Hard", label: "Hard", color: "#DB0837" },
  { value: "Normal", label: "Normal", color: "#FC842C" },
  { value: "Easy", label: "Easy", color: "#00875A" },
];
const categoryOptions = [
  { value: "family", label: "Family", color: "rgb(248,229,212)" },
  { value: "learning", label: "Learning", color: "rgb(252, 242, 183)" },
  { value: "health", label: "Health", color: "rgb(204, 247, 255)" },
  { value: "work", label: "Work", color: "rgb(211, 246, 206)" },
  { value: "leisure", label: "Leisure", color: "rgb(238, 216, 242)" },
  { value: "productivity", label: "Productivity", color: "rgb(209, 225, 246)" },
  { value: "social", label: "Social", color: "rgb(233, 192, 203)" },
  { value: "sport", label: "Sport", color: "rgb(186, 241, 229)" },
  { value: "Stuff", label: "Stuff", color: "rgb(32, 76, 229)" },
];

const getGroup = {
  Family: categoryOptions[0],
  Learning: categoryOptions[1],
  Health: categoryOptions[2],
  Work: categoryOptions[3],
  Leisure: categoryOptions[4],
  Productivity: categoryOptions[5],
  Social: categoryOptions[6],
  Sport: categoryOptions[7],
  STUFF: categoryOptions[8],
};

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
    width: 10,
  },
});

const getDifficulty = {
  Easy: colourOptions[2],
  Normal: colourOptions[1],
  Hard: colourOptions[0],
};

const initialState = {
  name: "",
  group: "",
  difficulty: "",
  dueDate: "",
  isPriority: "",
  done: "",
};

export const Card = ({ task: { _id, dueDate, name, difficulty, group } }) => {
  const dispatch = useDispatch();
  const [onEdit, setEdit] = useState(true);
  const [state, setState] = useState({ _id, dueDate, name, difficulty, group });

  // edit card function

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = name => ({ value }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const hours = new Date(dueDate);
  const actualHours = hours.getHours();
  const actualMinutes = hours.getMinutes();
  return (
    <li className={styles.cardMain}>
      <div className={styles.hardLevelContainer}>
        <Select
          isDisabled={onEdit ? false : true}
          name="difficulty"
          value={getDifficulty[state.difficulty]}
          options={colourOptions}
          defaultValue={colourOptions[0]}
          styles={colourStyles}
          className={styles.cardSelect}
          onChange={handleSelectChange("difficulty")}
        />
        <div className={styles.starContainer}>
          <img
            className={styles.cardStarIcon}
            src={starIcon}
            width="16px"
            height="auto"
            alt="star"
          />
        </div>
      </div>
      <input
        name="name"
        className={onEdit ? styles.inputTitleEdit : styles.inputTitle}
        value={state.name}
        onChange={handleChange}
        disabled={onEdit ? false : true}
      />
      {/* <h3 className={styles.cardTitle}>{name}</h3> */}
      <div className={styles.textCont}>
        <p className={styles.cardDate}>
          {actualHours}:{actualMinutes}
        </p>
        <img
          className={styles.cardFireIcon}
          src={fireIcon}
          width="16px"
          height="auto"
          alt="star"
        />
      </div>
      <div className={styles.kek}>
        <Select
          isDisabled={onEdit ? false : true}
          name="group"
          value={getDifficulty[state.group]}
          options={categoryOptions}
          className={styles.cardSelectCategory}
          defaultValue={categoryOptions[5]}
          styles={backgroundcolourStyles}
          onChange={handleSelectChange("group")}
        />
      </div>
      <button
        onClick={() => {
          setEdit(!onEdit);
        }}>
        x
      </button>
      <button
        onClick={() => {
          setEdit(!onEdit);
          dispatch(editCard(state));
        }}>
        💘
      </button>
      <button
        onClick={() => {
          dispatch(deleteCard(state));
        }}>
        🕳
      </button>
    </li>
  );
};
const colourStyles = {
  control: styles => ({ ...styles }),
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
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white")
          ? "white"
          : "#ccc"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};
const col = (color = "#ccc") => ({
  padding: "10px",
  paddingRight: "20px",
  backgroundColor: color,
  boxShadow: `0 10px ${color})`,
  borderRadius: "0 60px 60px 0",
});
const backgroundcolourStyles = {
  control: styles => ({ ...styles, backgroundColor: "color" }),
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
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "#ccc")
          ? "black"
          : "#ccc"
        : color,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  input: styles => ({ ...styles, ...col() }),
  placeholder: styles => ({ ...styles, ...col() }),
  singleValue: (styles, { data }) => ({ ...styles, ...col(data.color) }),
};
