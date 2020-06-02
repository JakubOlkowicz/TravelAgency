import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({img, name}) => (
  <article className={styles.component}>
    <img src={img} className={styles.image}></img>
    <p className={styles.title}>{name}</p>
  </article>
);

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
