import styled from '@emotion/native';
import { AnimationCallback } from 'react-native-reanimated';

import { BoardCell } from '../GameBoard/GameBoard';

import { AnimatedCircle } from './Circle';
import { AnimatedCross } from './Cross';

interface PlayerTileProps {
  onAnimationFinished?: AnimationCallback;
  onPress: () => void;
  player: BoardCell;
}

export const PlayerTile = ({
  onAnimationFinished,
  onPress,
  player,
}: PlayerTileProps) => {
  const Player = (() => {
    switch (player) {
      case 'o':
        return AnimatedCircle;
      case 'x':
        return AnimatedCross;
      default:
        return () => null;
    }
  })();

  return (
    <ContainerPressable onPress={onPress}>
      <Player onAnimationFinished={onAnimationFinished} />
    </ContainerPressable>
  );
};

const ContainerPressable = styled.Pressable({
  marginHorizontal: 4,
  marginVertical: 4,
  width: 100,
  height: 100,
});
