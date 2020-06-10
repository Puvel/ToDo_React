import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import TimeLab from "./TimeLab";
import Datetime from "react-datetime";
import { completeChellange } from "../../redux/dashBoard/cardOperation";
import { editChellangeStatus } from "../../redux/dashBoard/chellangeOperation";
import { chellangeSlice } from "../../redux/dashBoard/chellangeReducer";
import {
  deleteChellangeCard,
  updateChellangeCard,
} from "../../redux/dashBoard/cardOperation";
import styles from "./card.module.css";
import chroma from "chroma-js";
import trophyIcon from "../../assets/images/icons/trophy.svg";
import ChallengeCompleted from "./modalCompleted/ChallengeCompleted";

const colourOptions = [
  { value: "Hard", label: "Hard", color: "#DB0837" },
  { value: "Normal", label: "Normal", color: "#FC842C" },
  { value: "Easy", label: "Easy", color: "#00875A" },
];
const categoryOptions = [
  { value: "stuff", label: "Stuff", color: "rgb(248,229,212)" },
  { value: "learning", label: "Learning", color: "rgb(252, 242, 183)" },
  { value: "health", label: "Health", color: "rgb(204, 247, 255)" },
  { value: "work", label: "Work", color: "rgb(211, 246, 206)" },
  { value: "leisure", label: "Leisure", color: "rgb(238, 216, 242)" },
  { value: "productivity", label: "Productivity", color: "rgb(209, 225, 246)" },
  { value: "social", label: "Social", color: "rgb(233, 192, 203)" },
  { value: "sport", label: "Sport", color: "rgb(186, 241, 229)" },
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
const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",
  backgroundColor: "rgb(32, 57, 90)",
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
export const ChallengeCard = ({
  task: { _id, dueDate, name, difficulty, group, challengeSendToUser, userId },
}) => {
  const [state, setState] = useState({
    dueDate,
    difficulty,
    _id,
    userId,
  });
  const [isDone, setDone] = useState(false);
  const [onEdit, setEdit] = useState(false);
  const hours = new Date(dueDate);
  const actualHours = hours.getHours();
  const actualMinutes = hours.getMinutes();
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(editChellangeStatus(_id));
    dispatch(chellangeSlice.actions.startChellange());
    // dispatch(chellangeSlice.actions.startChellange(false));
  };

  const handleDateChange = e => {
    const date = e._d;
    const actualDate = new Date(date).toISOString();
    setState(prev => ({ ...prev, dueDate: actualDate }));
  };

  const handleDelete = () => {
    dispatch(chellangeSlice.actions.deleteChellange());
    dispatch(deleteChellangeCard({ _id, userId }));
  };
  const updateChellange = () => {
    dispatch(updateChellangeCard(state));
    setEdit(false);
  };

  const handelDoneChellange = () => {
    dispatch(completeChellange({ _id, userId }));
  };

  // if (challengeSendToUser) {
  //   dispatch(chellangeSlice.actions.startChellange());
  // }

  return (
    <li className={styles.challengeCardMain}>
      {isDone ? (
        <ChallengeCompleted
          name={name}
          handelDoneChellange={handelDoneChellange}
        />
      ) : (
        <>
          <div className={styles.challengeHardLevelContainer}>
            <div className={styles.selectContainer}>
              <Select
                isDisabled={onEdit ? false : true}
                value={getDifficulty[difficulty]}
                options={colourOptions}
                defaultValue={colourOptions[0]}
                styles={colourStyles}
                className={styles.cardSelect}
              />
            </div>
            <div className={styles.starContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12px"
                version="1.1"
                viewBox="0 0 512.00001 512"
                width="12px"
                className={styles.viewTrophy}>
                <g id="surface1">
                  <path d="M 497 36.953125 L 431.296875 36.953125 C 431.535156 29.675781 431.667969 22.355469 431.667969 15 C 431.667969 6.714844 424.949219 0 416.667969 0 L 95.335938 0 C 87.050781 0 80.335938 6.714844 80.335938 15 C 80.335938 22.355469 80.464844 29.675781 80.703125 36.953125 L 15 36.953125 C 6.714844 36.953125 0 43.667969 0 51.953125 C 0 119.164062 17.566406 182.574219 49.460938 230.507812 C 80.988281 277.894531 122.984375 305.074219 168.347656 307.71875 C 178.632812 318.910156 189.507812 328.035156 200.832031 334.996094 L 200.832031 401.664062 L 175.667969 401.664062 C 145.246094 401.664062 120.5 426.414062 120.5 456.832031 L 120.5 481.996094 L 119.433594 481.996094 C 111.148438 481.996094 104.433594 488.714844 104.433594 496.996094 C 104.433594 505.28125 111.148438 511.996094 119.433594 511.996094 L 392.566406 511.996094 C 400.851562 511.996094 407.566406 505.28125 407.566406 496.996094 C 407.566406 488.714844 400.851562 481.996094 392.566406 481.996094 L 391.5 481.996094 L 391.5 456.832031 C 391.5 426.414062 366.75 401.664062 336.332031 401.664062 L 311.167969 401.664062 L 311.167969 334.996094 C 322.492188 328.035156 333.363281 318.910156 343.648438 307.71875 C 389.015625 305.074219 431.007812 277.894531 462.539062 230.507812 C 494.433594 182.574219 512 119.164062 512 51.953125 C 512 43.667969 505.28125 36.953125 497 36.953125 Z M 74.4375 213.890625 C 48.128906 174.351562 32.671875 122.644531 30.316406 66.953125 L 82.378906 66.953125 C 87.789062 135.414062 103.859375 198.691406 128.976562 248.925781 C 132.976562 256.925781 137.160156 264.480469 141.5 271.601562 C 116.550781 262.179688 93.460938 242.484375 74.4375 213.890625 Z M 437.5625 213.890625 C 418.539062 242.484375 395.449219 262.179688 370.5 271.601562 C 374.84375 264.480469 379.023438 256.925781 383.023438 248.925781 C 408.140625 198.691406 424.207031 135.414062 429.621094 66.953125 L 481.683594 66.953125 C 479.328125 122.644531 463.871094 174.351562 437.5625 213.890625 Z M 437.5625 213.890625 "></path>
                </g>
              </svg>
            </div>
          </div>
          <h4 className={styles.challenge}>challenge</h4>
          <h3 className={styles.challengrCardTitle}>{name}</h3>
          <div className={styles.textCont}>
            {onEdit ? (
              <Datetime
                onChange={handleDateChange}
                defaultValue={hours}
                closeOnSelect
              />
            ) : (
              <TimeLab date={dueDate} />
            )}
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
              {challengeSendToUser ? (
                <div>
                  {onEdit ? (
                    <button
                      className={`${styles.Btn} ${styles.saveBtn}`}
                      onClick={updateChellange}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0V0z" />
                        <path
                          className={styles.save}
                          fill="none"
                          d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className={`${styles.Btn} ${styles.editBtn}`}
                      onClick={() => {
                        setEdit(!onEdit);
                        // editChellangeStatus;
                      }}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <title>pencil</title>
                        <path
                          className={styles.edit}
                          fill="none"
                          d="M21 6.879l-3.879-3.879c-0.293-0.293-0.678-0.439-1.061-0.439-0.384 0-0.767 0.146-1.060 0.439l-10.939 10.939c-0.293 0.293-0.558 0.727-0.75 1.188-0.192 0.463-0.311 0.959-0.311 1.373v4.5h4.5c0.414 0 0.908-0.119 1.371-0.311s0.896-0.457 1.189-0.75l10.94-10.939c0.293-0.293 0.439-0.678 0.439-1.061 0-0.384-0.146-0.767-0.439-1.060zM5.768 15.061l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zM7.5 19h-1.5l-1-1v-1.5c0-0.077 0.033-0.305 0.158-0.605 0.010-0.020 2.967 2.938 2.967 2.938-0.322 0.134-0.548 0.167-0.625 0.167zM8.939 18.232l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zM17.939 9.232l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z"></path>
                      </svg>
                    </button>
                  )}

                  <button
                    className={`${styles.Btn} ${styles.deliteBtn}`}
                    onClick={handleDelete}>
                    <svg
                      className={styles.delit}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </button>
                  <button
                    className={`${styles.Btn} ${styles.doneBtn}`}
                    onClick={() => setDone(!isDone)}>
                    <svg
                      className={styles.done}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <button onClick={handleDelete} className={styles.btnDel}>
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
                  <button onClick={handleStart} className={styles.btn}>
                    START
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </li>
  );
};
const colourStyles = {
  control: styles => ({ ...styles, color: "red" }),
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
