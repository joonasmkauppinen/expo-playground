import styled from '@emotion/native';
import { clamp } from '@internal/reanimated-helpers';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

import {
  boardCellsAtom,
  currentPlayerAtom,
  gameStateAtom,
  numberOfTurnsAtom,
  playerAnimationRunningAtom,
  winningCombinationAtom,
} from '../../atoms/atoms';
import { Player } from '../../types/player';
import { getIsWinningTurn } from '../../utils/game-utils';
import { makeComputerTurn } from '../../utils/makeComputerTurn';
import { BoardTile } from '../BoardTile/BoardTile';
import { PlayerTile } from '../PlayerTile/PlayerTile';
import { WinningCombinationLine } from '../WinningCombinationLine/WinningCombinationLine';

export type BoardCell = Player | null;

const getNextPlayer = (player: Player): Player => (player === 'x' ? 'o' : 'x');

export const GameBoard = () => {
  const [boardCells, setBoardCells] = useAtom(boardCellsAtom);
  const [currentPlayer, setCurrentPlayer] = useAtom(currentPlayerAtom);
  const [gameState, setGameState] = useAtom(gameStateAtom);
  const [winningCombination, setWinningCombination] = useAtom(
    winningCombinationAtom
  );
  const [numberOfTurns, setNumberOfTurns] = useAtom(numberOfTurnsAtom);
  const [playerAnimationRunning] = useAtom(playerAnimationRunningAtom);

  useEffect(() => {
    if (currentPlayer === 'o' && playerAnimationRunning === false) {
      const newBoardCells = makeComputerTurn(boardCells);
      setBoardCells(newBoardCells);
      setCurrentPlayer(getNextPlayer(currentPlayer));
    }
  }, [currentPlayer]);

  const boardStylesDriverSV = useDerivedValue(() => {
    if (gameState === 'FINISHED') {
      return withSpring(0);
    } else {
      return withSpring(1);
    }
  }, [gameState, playerAnimationRunning]);

  const animatedBoardStyles = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(boardStylesDriverSV.value, [0, 1], [0.9, 1]) },
    ],
    opacity: clamp(boardStylesDriverSV.value, [0, 1], [0.5, 1]),
  }));

  const handleCellPress = (cellIndex: number) => {
    if (winningCombination !== null) {
      return;
    }

    if (gameState !== 'IN_PROGRESS') {
      return;
    }

    if (boardCells[cellIndex] !== null) {
      return;
    }

    const newBoardCells = boardCells.map((cell, index) => {
      if (index === cellIndex) {
        return currentPlayer;
      }
      return cell;
    });

    setBoardCells(newBoardCells);

    const winningTurn = getIsWinningTurn(newBoardCells, currentPlayer);

    if (winningTurn) {
      setWinningCombination(winningTurn);
      return;
    }

    setCurrentPlayer(getNextPlayer(currentPlayer));
  };

  // const nextPlayer = () => {
  //   setCurrentPlayer(getNextPlayer(currentPlayer));
  // };

  return (
    <ContainerView style={animatedBoardStyles}>
      {boardCells.map((cell, index) => (
        <BoardTile cell={cell} key={`board-tile-${index}`} />
      ))}
      <PlayerTilesContainerView>
        {boardCells.map((cell, index) => (
          <PlayerTile
            player={cell}
            onPress={() => handleCellPress(index)}
            key={`player-tile-${index}`}
            onAnimationFinished={() => {
              'worklet';
              const turns = numberOfTurns + 1;
              runOnJS(setNumberOfTurns)(turns);
            }}
          />
        ))}
      </PlayerTilesContainerView>
      <WinningCombinationLine
        combination={winningCombination}
        onAnimationFinished={(finished) => {
          'worklet';
          if (finished) {
            runOnJS(setGameState)('FINISHED');
          }
        }}
      />
    </ContainerView>
  );
};

const ContainerView = styled(Animated.View)({
  aspectRatio: 1 / 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const PlayerTilesContainerView = styled.View({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: 'row',
  flexWrap: 'wrap',
});
