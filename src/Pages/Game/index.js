import { Client } from 'boardgame.io/react';
import { TicTacToe } from './TicTacToe';
import { TicTacToeBoard } from './TicTacToeBoard';

const Game = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});

export default Game;
