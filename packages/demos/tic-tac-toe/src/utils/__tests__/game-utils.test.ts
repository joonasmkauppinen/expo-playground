import { BoardCell } from '../../components/GameBoard/GameBoard';
import { getIsWinningTurn } from '../game-utils';

describe('getIsWinningTurn()', () => {
  it('returns "row-1" when [0, 1, 2] are "x"', () => {
    const cells: BoardCell[] = [
      'x',
      'x',
      'x',
      'o',
      'o',
      null,
      null,
      null,
      null,
    ];

    const winningTurn = getIsWinningTurn(cells, 'x');
    expect(winningTurn).toBe('row-1');
  });
});
