import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Datetime from "react-datetime";
import Select from "react-select";
import { editCard, deleteCard } from "../../redux/dashBoard/cardOperation";
import { dashBoardSlice } from "../../redux/dashBoard/dashBoardReducer";
import { createTask } from "../../redux/dashBoard/dashBoardOperation";
import styles from "./card.module.css";
import chroma from "chroma-js";
import fireIcon from "../../assets/images/icons/fire.svg";
import TimeLab from "./TimeLab";
import ModalCard from "./modalCard/ModalCard";
import ModalCompleted from "./modalCompleted/ModalCompleted";
import Tooltip from "@material-ui/core/Tooltip";

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
  { value: "stuff", label: "Stuff", color: "rgb(32, 76, 229)" },
];

const convert = (str) => {
  const date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};

const getGroup = {
  family: categoryOptions[0],
  learning: categoryOptions[1],
  health: categoryOptions[2],
  work: categoryOptions[3],
  leisure: categoryOptions[4],
  productivity: categoryOptions[5],
  social: categoryOptions[6],
  sport: categoryOptions[7],
  stuff: categoryOptions[8],
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

const pad = (value) => {
  return String(value).padStart(2, "0");
};

export const Card = ({
  task: { _id, dueDate, name, difficulty, group, isPriority, onCreate, done },
}) => {
  const [isDone, setDone] = useState(false);
  const dispatch = useDispatch();
  const [onEdit, setEdit] = useState(false);
  const [onDelete, setDelete] = useState(false);
  const [state, setState] = useState({
    _id,
    dueDate,
    name,
    difficulty,
    group,
    isPriority,
    done,
  });
  useEffect(() => {
    if (onCreate) {
      setEdit(!onEdit);
    }
  }, []);

  // CRUD FUNCTIONS
  const handleAddTask = () => {
    onEdit && setEdit(!onEdit);
    dispatch(createTask(state));
  };
  // edit card function
  const priorityToogle = async () => {
    setState((prev) => ({ ...prev, isPriority: !prev.isPriority }));
    dispatch(editCard({ ...state, isPriority: !isPriority }));
  };

  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name) => ({ value }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = async () => {
    dispatch(editCard(state));
  };

  const handleDateChange = (e) => {
    const date = e._d;
    const actualDate = new Date(date).toISOString();
    setState((prev) => ({ ...prev, dueDate: actualDate }));
  };

  const handleDelite = () => {
    dispatch(deleteCard(state));
  };

  const hendlAbortDelite = () => {
    setDelete(false);
  };

  const yesterday = Datetime.moment().subtract(1, "day");
  const valid = function (current) {
    return current.isAfter(yesterday);
  };

  const handleContinuteDone = async () => {
    dispatch(editCard({ ...state, done: true }));
  };

  const handleAbortStart = () => {
    dispatch(dashBoardSlice.actions.abortTaskCreate());
  };

  const hours = new Date(dueDate);

  const date =
    hours.getFullYear() +
    "-" +
    pad(hours.getMonth() + 1) +
    "-" +
    pad(hours.getDate());
  const actualHours = hours.getHours();
  const actualMinutes = hours.getMinutes();
  return (
    <li className={styles.cardMain}>
      {isDone ? (
        <ModalCompleted
          handleContinuteDone={handleContinuteDone}
          name={state.name}
        />
      ) : (
        <>
          <div>
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
              <button
                className={styles.starContainer}
                onClick={!done ? priorityToogle : () => {}}
              >
                <svg
                  className="starIconCl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 110 130"
                >
                  <path
                    className={
                      state.isPriority ? styles.starIconActiv : styles.starIcon
                    }
                    d="M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
            <Tooltip title={state.name} placement="top">
              <input
                name="name"
                className={onEdit ? styles.inputTitleEdit : styles.inputTitle}
                value={state.name}
                onChange={handleChange}
                disabled={onEdit ? false : true}
              />
            </Tooltip>
            <div className={styles.textCont}>
              {onEdit ? (
                <Datetime
                  dateFormat="DD-MM-YYYY"
                  timeFormat="HH-mm"
                  onChange={handleDateChange}
                  defaultValue={hours}
                  closeOnSelect
                  isValidDate={valid}
                />
              ) : (
                <TimeLab date={dueDate} />
              )}

              <img
                className={styles.cardFireIcon}
                src={fireIcon}
                width="16px"
                height="auto"
                alt="star"
              />
            </div>
            <div className={styles.bottomWrap}>
              <div className={styles.kek}>
                <Select
                  isDisabled={onEdit ? false : true}
                  name="group"
                  value={getGroup[state.group]}
                  options={categoryOptions}
                  className={styles.cardSelectCategory}
                  defaultValue={categoryOptions[5]}
                  styles={backgroundcolourStyles}
                  onChange={handleSelectChange("group")}
                />
              </div>
              {!done && (
                <>
                  {onCreate ? (
                    <div className={styles.imgCont}>
                      <button
                        onClick={() => {
                          setDelete(true);
                        }}
                        className={styles.btnDel}
                      >
                        <svg
                          className={styles.delite}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </button>
                      <span className={styles.indicatorSeparator}></span>
                      <button className={styles.btn} onClick={handleAddTask}>
                        START
                      </button>
                    </div>
                  ) : (
                    <div className={styles.btnWrap}>
                      {onEdit ? (
                        <button
                          className={`${styles.Btn} ${styles.saveBtn}`}
                          onClick={(onCreate = false) => {
                            setEdit(!onEdit);
                            dispatch(editCard(state));
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
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
                          }}
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <title>pencil</title>
                            <path
                              className={styles.edit}
                              fill="none"
                              d="M21 6.879l-3.879-3.879c-0.293-0.293-0.678-0.439-1.061-0.439-0.384 0-0.767 0.146-1.060 0.439l-10.939 10.939c-0.293 0.293-0.558 0.727-0.75 1.188-0.192 0.463-0.311 0.959-0.311 1.373v4.5h4.5c0.414 0 0.908-0.119 1.371-0.311s0.896-0.457 1.189-0.75l10.94-10.939c0.293-0.293 0.439-0.678 0.439-1.061 0-0.384-0.146-0.767-0.439-1.060zM5.768 15.061l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zM7.5 19h-1.5l-1-1v-1.5c0-0.077 0.033-0.305 0.158-0.605 0.010-0.020 2.967 2.938 2.967 2.938-0.322 0.134-0.548 0.167-0.625 0.167zM8.939 18.232l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zM17.939 9.232l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z"
                            ></path>
                          </svg>
                        </button>
                      )}

                      <button
                        className={`${styles.Btn} ${styles.deliteBtn}`}
                        onClick={() => {
                          setDelete(true);
                        }}
                      >
                        <svg
                          className={styles.delit}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </button>
                      <button
                        className={`${styles.Btn} ${styles.doneBtn}`}
                        onClick={() => setDone(!isDone)}
                      >
                        <svg
                          className={styles.done}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
      {onCreate
        ? onDelete && (
            <ModalCard
              title="Delete this Quest?"
              delite={handleAbortStart}
              cancel={hendlAbortDelite}
            />
          )
        : onDelete && (
            <ModalCard
              title="Delete this Quest?"
              delite={handleDelite}
              cancel={hendlAbortDelite}
            />
          )}
    </li>
  );
};

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
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

  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
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
  control: (styles) => ({ ...styles, backgroundColor: "color" }),
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
  input: (styles) => ({ ...styles, ...col() }),
  placeholder: (styles) => ({ ...styles, ...col() }),
  singleValue: (styles, { data }) => ({ ...styles, ...col(data.color) }),
};
