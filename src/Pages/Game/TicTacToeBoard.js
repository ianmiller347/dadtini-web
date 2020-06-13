import React from 'react';
import { arrayOfN } from '../../utils/helpers';
import AirMonarch from '../../svg/shoe/AirMonarch';
import NewBalance608 from '../../svg/shoe/NewBalance608';
import './style.scss';

const contenders = {
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

const XorO = (num) => {
  if (!num) {
    return null;
  }
  return contenders[num].display;
}

const Cell = ({ row, col, onClick, G }) => {
  const id = 3 * row + col;
  return (
    <td 
      className="board-cell"
      key={id}
      onClick={() => onClick(id)}>
      {XorO(G.cells[id])}
    </td>
  );
};

export const TicTacToeBoard = ({ G, ctx, moves }) => {
  let winner = '';
  if (ctx.gameover) {
    winner =
      ctx.gameover.winner !== undefined ? (
        <div className="winner">Winner: {contenders[ctx.gameover.winner].title}</div>
      ) : (
        <div className="winner">Draw!</div>
      );
  }

  return (
    <div className="tic-tac-toe-container">
      <table className="tic-tac-toe-table">
        <tbody>
          {arrayOfN(3).map(i => (
            <tr key={i}>
              {arrayOfN(3).map(j => (
                <Cell 
                  row={i}
                  col={j}
                  onClick={moves.clickCell}
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
}

export default TicTacToeBoard;
