import React from 'react';
import styles from './card.module.css';

const Card = ({ task: { name, group, difficulty } }) => (
  <li className={styles.todosSectionItem}>
    <h3>{name}</h3>
    <p>{group}</p>
    <p>{difficulty}</p>
  </li>
);

export default Card;
