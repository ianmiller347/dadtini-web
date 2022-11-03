import React, { useState } from 'react';
import { Client, Lobby } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { RandomBot } from 'boardgame.io/ai';
import { TicTacToe } from './TicTacToe';
import { TicTacToeBoard } from './TicTacToeBoard';
import AirMonarch from '../../../svg/shoe/AirMonarch';
import NewBalance608 from '../../../svg/shoe/NewBalance608';
import './style.scss';

export const contenders = {
  "0": {
    value: 'o',
    display: <NewBalance608 />,
    title: 'New Balance 608',
  },
  "1": {
    value: 'x',
    display: <AirMonarch />,
    title: 'Nike Air Monarch',
  },
};

const MULTI = 'MULTIPLAYER';
const SINGLE = 'SINGLEPLAYER';
const API_HOST = `http://${window.location.hostname}${process.env.NODE_ENV === 'development' ? ':8080' : ''}`;
// const GAMES = `${API_HOST}/games/tic-tac-toe`;

// the singleplayer client vs. the bot
const TicTacToeClient = Client({
  game: TicTacToe,
  numPlayers: 2,
  board: TicTacToeBoard,
  debug: false,
  // multiplayer: SocketIO({ server: API_HOST }),
  multiplayer: Local({ bots: { 1: RandomBot } }),
});

export const TicTacToeGame = () => {
  const [playerId, setPlayerId] = useState(null);
  // const [gameIsJoined, joinGame] = useState(false);
  // const [gameId, setGameId] = useState('default');
  const [playerMode, setPlayerMode] = useState(null);

  if (!playerMode) {
    return (
      <div>
        <button onClick={() => setPlayerMode(SINGLE)}>
          Play against CPU
        </button>
        <button onClick={() => setPlayerMode(MULTI)}>
          Play against F r i e n d
        </button>
      </div>
    );
  }

  if (playerMode === MULTI) {
    return (
      <div className="game-starter-holdster">
        <Lobby 
          gameServer={API_HOST}
          lobbyServer={API_HOST}
          gameComponents={[{ game: TicTacToe, board: TicTacToeBoard }]}
        />
      </div>
    );
  }

  if (playerId === null) {
    return (
      <div>
        <h3>Choose your character</h3>
        <div className="player-choices">
          {Object.keys(contenders).map(key => (
            <button
              key={`${key}_contender`}
              value={key}
              onClick={() => setPlayerId(key)}
            >
              {contenders[key].title}
              {contenders[key].display}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <TicTacToeClient playerID={`${playerId}`} />
    </div>
  );
}

export default TicTacToeGame;
