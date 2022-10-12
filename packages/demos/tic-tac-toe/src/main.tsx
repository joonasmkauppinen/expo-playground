import styled from '@emotion/native';
import { useAtom } from 'jotai';

import {
  boardCellsAtom,
  currentPlayerAtom,
  gameStateAtom,
  numberOfTurnsAtom,
  winningCombinationAtom,
} from './atoms/atoms';
import { GameBoard } from './components/GameBoard/GameBoard';

export const TicTacToeApp = () => {
  const [, setBoardCells] = useAtom(boardCellsAtom);
  const [, setCurrentPlayer] = useAtom(currentPlayerAtom);
  const [, setGameState] = useAtom(gameStateAtom);
  const [, setWinningCombination] = useAtom(winningCombinationAtom);
  const [, setNumberOfTurns] = useAtom(numberOfTurnsAtom);

  return (
    <ScreenContainerView>
      <GameBoard />
      <Button
        onPress={() => {
          setGameState('IN_PROGRESS');
          setWinningCombination(null);
          setNumberOfTurns(0);
          setCurrentPlayer('x');
          setBoardCells(Array(9).fill(null));
        }}
      >
        <Label>Reset</Label>
      </Button>
    </ScreenContainerView>
  );
};

const ScreenContainerView = styled.View({
  flex: 1,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
});

const Button = styled.Pressable({
  padding: 12,
});

const Label = styled.Text({
  color: 'white',
  fontSize: 16,
});
