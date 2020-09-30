import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getGameUrl } from '../../utilites/router';

const Lobby = () => {
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      setGameId(1234);
    };
  }, []);

  return gameId ? <Link to={getGameUrl(gameId)}>Start game</Link> : <Loader />;
};

export default Lobby;
