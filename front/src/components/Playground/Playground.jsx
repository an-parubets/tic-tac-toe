import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialCoords = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Playground = ({ gameId }) => {
  const [coords, setCoords] = useState(initialCoords);

  useEffect(() => {}, [coords]);

  return <div>Page game</div>;
};

Playground.propTypes = {
  gameId: PropTypes.number.isRequired,
};

export default Playground;
