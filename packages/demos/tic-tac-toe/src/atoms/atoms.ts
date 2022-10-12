import { atom } from 'jotai';

import { BoardCell } from '../components/GameBoard/GameBoard';
import { GameState } from '../types/game-state';
import { Player } from '../types/player';
import { GameWinPosition } from '../utils/game-utils';

export const boardCellsAtom = atom<BoardCell[]>(Array(9).fill(null));
export const currentPlayerAtom = atom<Player>('x');
export const gameStateAtom = atom<GameState>('IN_PROGRESS');
export const winningCombinationAtom = atom<GameWinPosition | null>(null);
export const playerAnimationRunningAtom = atom<boolean>(false);
export const numberOfTurnsAtom = atom<number>(0);
