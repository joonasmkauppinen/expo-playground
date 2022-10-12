import styled from '@emotion/native';
import { useAtom } from 'jotai';
import { AnimationCallback } from 'react-native-reanimated';

import { playerAnimationRunningAtom } from '../../atoms/atoms';
import {
  GameWinPosition,
  getLineStylesForCombination,
} from '../../utils/game-utils';

import { DiagonalLine } from './DiagonalLine';
import { SimpleLine } from './SimpleLine';

interface WinningCombinationLineProps {
  combination: GameWinPosition | null;
  onAnimationFinished?: AnimationCallback;
}

export const WinningCombinationLine = ({
  combination,
  onAnimationFinished,
}: WinningCombinationLineProps) => {
  const [playerAnimationRunning] = useAtom(playerAnimationRunningAtom);

  if (combination === null || playerAnimationRunning) {
    return null;
  }

  const styles = getLineStylesForCombination(combination);
  const Line =
    combination === 'diagonal-bottom-left-top-right' ||
    combination === 'diagonal-top-left-bottom-right'
      ? DiagonalLine
      : SimpleLine;

  return (
    <ContainerView pointerEvents="none">
      <Line style={styles} onAnimationFinished={onAnimationFinished} />
    </ContainerView>
  );
};

const ContainerView = styled.View({
  position: 'absolute',
  top: 4,
  bottom: 4,
  left: 4,
  right: 4,
});
