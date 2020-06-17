import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { TicTacToeGame } from './TicTacToe/';
import './style.scss';

export const Games = () => {
  return (
    <div className="page page--games">
      <h1>Games for dads</h1>
      <ul className="games-list">
        <li><Link to="/games/tic-tac-toe">Tic Tac Toe</Link></li>
      </ul>
      <Switch>
        <Route exact path="/games/tic-tac-toe">
          <TicTacToeGame />
        </Route>
      </Switch>
    </div>
  );
};

export default Games;
