import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';
import { arrayOfN, getShuffledArray } from '../../../utils/helpers';

const isVictory = (cells) => {
  const positions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];

  const isRowComplete = row => {
    const symbols = row.map(i => cells[i]);
    return symbols.every(i => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some(i => i === true);
}

// Return true if all `cells` are occupied.
const isDraw = (cells) => cells.filter(c => !c).length === 0;

export const TicTacToe = {
  name: 'tic-tac-toe',
  minPlayers: 2,
  maxPlayers: 2,
  ai: {
    enumerate: (G, ctx) =>
      arrayOfN(9)
        .filter((i) => !G.cells[i])
        .map((i) => ({ move: 'clickCell', args: [i] })),
  },
  endIf: (G, ctx) => {
    if (isVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (isDraw(G.cells)) {
      return { draw: true };
    }
  },
  playerView: (G, ctx, playerID) => G,
  setup: () => ({ cells: Array(9).fill(null) }),
  moves: {
    clickCell: (G, ctx, id) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },
  turn: {
    moveLimit: 1,
    onBegin: (G, ctx) => G,
    order: TurnOrder.CUSTOM(getShuffledArray(['0', '1'])),
  },
};

export default TicTacToe;
