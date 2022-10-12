import { ViewStyle } from 'react-native';

import { BoardCell } from '../components/GameBoard/GameBoard';
import { Player } from '../types/player';

// Board indices
// 0 1 2
// 3 4 5
// 6 7 8

const ROW_1 = [0, 1, 2];
const ROW_2 = [3, 4, 5];
const ROW_3 = [6, 7, 8];
const COLUMN_1 = [0, 3, 6];
const COLUMN_2 = [1, 4, 7];
const COLUMN_3 = [2, 5, 8];
const TOP_LEFT_BOTTOM_RIGHT_DIAGONAL = [0, 4, 8];
const BOTTOM_LEFT_TOP_RIGHT_DIAGONAL = [2, 4, 6];

export type GameWinPosition =
  | 'row-1'
  | 'row-2'
  | 'row-3'
  | 'column-1'
  | 'column-2'
  | 'column-3'
  | 'diagonal-top-left-bottom-right'
  | 'diagonal-bottom-left-top-right';

const winningCombinations: [GameWinPosition, number[]][] = [
  ['column-1', COLUMN_1],
  ['column-2', COLUMN_2],
  ['column-3', COLUMN_3],
  ['row-1', ROW_1],
  ['row-2', ROW_2],
  ['row-3', ROW_3],
  ['diagonal-bottom-left-top-right', BOTTOM_LEFT_TOP_RIGHT_DIAGONAL],
  ['diagonal-top-left-bottom-right', TOP_LEFT_BOTTOM_RIGHT_DIAGONAL],
];

export const getIsWinningTurn = (
  cells: BoardCell[],
  player: Player
): GameWinPosition | null => {
  const winningCombination = winningCombinations.find(([_, combinations]) =>
    combinations.every((cellIndex) => cells[cellIndex] === player)
  );

  if (winningCombination) {
    return winningCombination[0];
  }

  return null;
};

const COMMON_COLUMN_STYLES: ViewStyle = {
  position: 'absolute',
  transform: [{ translateX: -108 }, { rotate: '90deg' }, { translateX: 108 }],
  top: 0,
};

const COMMON_ROW_STYLES: ViewStyle = {
  position: 'absolute',
  left: 0,
};

export const getLineStylesForCombination = (
  combination: GameWinPosition
): ViewStyle => {
  switch (combination) {
    case 'column-1': {
      return {
        ...COMMON_COLUMN_STYLES,
      };
    }

    case 'column-2': {
      return {
        ...COMMON_COLUMN_STYLES,
        left: 108,
      };
    }

    case 'column-3': {
      return {
        ...COMMON_COLUMN_STYLES,
        left: 216,
      };
    }

    case 'row-1': {
      return {
        ...COMMON_ROW_STYLES,
      };
    }

    case 'row-2': {
      return {
        ...COMMON_ROW_STYLES,
        top: 108,
      };
    }

    case 'row-3': {
      return {
        ...COMMON_ROW_STYLES,
        top: 216,
      };
    }

    case 'diagonal-bottom-left-top-right': {
      return {};
    }

    case 'diagonal-top-left-bottom-right': {
      return {
        transform: [{ rotate: '90deg' }],
      };
    }
  }
};
