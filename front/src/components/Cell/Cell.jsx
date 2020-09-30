import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cell.module.css';

const Cell = ({ coords, value, isLocked, onClick }) => {
  const onClickHandler = () => {
    !isLocked && onClick(coords);
  };

  return (
    <div className={styles.cell} onClick={onClickHandler}>
      {value}
    </div>
  );
};

Cell.propTypes = {
  coords: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  value: PropTypes.string,
  isLocked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Cell;
