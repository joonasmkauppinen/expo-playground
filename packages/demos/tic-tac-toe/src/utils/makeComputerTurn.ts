import { BoardCell } from '../components/GameBoard/GameBoard';

export const makeComputerTurn = (cells: BoardCell[]): BoardCell[] => {
  const emptyCells = cells.filter((cell) => cell === null);
  const computerIndex = Math.round(Math.random() * emptyCells.length - 1);
  console.log('[makeComputerTurn] - computerIndex: ', computerIndex);
  const newCells = [...cells];
  newCells[computerIndex] = 'o';
  return newCells;
};
