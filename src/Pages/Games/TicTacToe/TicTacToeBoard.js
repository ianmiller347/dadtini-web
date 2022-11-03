import React from 'react';
import PropTypes from 'prop-types';
import { arrayOfN } from '../../../utils/helpers';
import { contenders } from './';

const XorO = (num) => {
  if (!num) {
    return null;
  }
  return contenders[num].display;
};

const Cell = ({ row, col, onClick, G }) => {
  console.log('row, col, onClick, G', row, col, onClick, G);
  const id = 3 * row + col;
  if (G.cells[id]) {
    return (
      <td className="board-cell" key={id}>
        {XorO(G.cells[id])}
      </td>
    );
  }
  return (
    <td
      className="board-cell board-cell--empty"
      key={id}
      onClick={() => onClick(id)}
    >
      {' '}
    </td>
  );
};

const clickCell = (id, cb, isActive, G) => {
  if (!isActive) {
    return false;
  }
  if (G.cells[id] !== null) {
    return false;
  }
  cb(id);
};

export const TicTacToeBoard = ({ G, ctx, moves, isActive, reset }) => {
  console.log('reset', reset);
  let winner = '';
  if (ctx.gameover) {
    winner =
      ctx.gameover.winner !== undefined ? (
        <div className="winner">
          Winner: {contenders[ctx.gameover.winner].title}
        </div>
      ) : (
        <div className="winner">Draw!</div>
      );
  }

  return (
    <div className="tic-tac-toe-container">
      {!ctx.gameover && (
        <div className="tic-tac-toe-status">
          It's your turn, {contenders[ctx.currentPlayer].title}
        </div>
      )}
      {ctx.gameover && <button onClick={reset}>Reset</button>}
      <table className="tic-tac-toe-table">
        <tbody>
          {arrayOfN(3).map((i) => (
            <tr key={i}>
              {arrayOfN(3).map((j) => (
                <Cell
                  key={`cell_${i}_${j}`}
                  row={i}
                  col={j}
                  onClick={(id) => clickCell(id, moves.clickCell, isActive, G)}
                  G={G}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {winner}
    </div>
  );
};

TicTacToeBoard.propTypes = {
  G: PropTypes.any.isRequired,
  ctx: PropTypes.any.isRequired,
  moves: PropTypes.any.isRequired,
  playerID: PropTypes.string,
  isActive: PropTypes.bool,
  isMultiplayer: PropTypes.bool,
};

export default TicTacToeBoard;
