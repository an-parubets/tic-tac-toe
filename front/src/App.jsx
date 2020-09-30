import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/game/:gameId">
          <GamePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
