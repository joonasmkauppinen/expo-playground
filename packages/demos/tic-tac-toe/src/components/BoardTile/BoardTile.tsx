import styled from '@emotion/native';
import { useAtom } from 'jotai';
import React from 'react';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { ClipPath, Rect } from 'react-native-svg';

import { currentPlayerAtom, gameStateAtom } from '../../atoms/atoms';
import { BoardCell } from '../GameBoard/GameBoard';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

// Multiply by 2 because stroke is drawn to the center and it need to be clipped to the rect to
// make it appear inside.
const STROKE_WIDTH = 4 * 2;

interface BoardTileProps {
  cell: BoardCell;
}

export const BoardTile = ({ cell }: BoardTileProps) => {
  const [currentPlayer] = useAtom(currentPlayerAtom);
  const [gameState] = useAtom(gameStateAtom);
  const strokeWidthSV = useSharedValue(0);

  useDerivedValue(() => {
    if (gameState === 'IN_PROGRESS' && cell === null && currentPlayer === 'x') {
      strokeWidthSV.value = withSpring(STROKE_WIDTH, {
        stiffness: 500,
        mass: 5,
        damping: 30,
      });
    } else {
      strokeWidthSV.value = withSpring(0, {
        overshootClamping: true,
        stiffness: 500,
        mass: 5,
        damping: 30,
      });
    }
  }, [cell, currentPlayer, gameState]);

  const animatedStrokeWidth = useAnimatedProps(() => {
    return {
      strokeWidth: strokeWidthSV.value,
    };
  });

  return (
    <WrapperView>
      <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <Rect x="1.5" y="1.5" width="97" height="97" rx="11.5" fill="#141414" />
        {/* @ts-ignore */}
        <ClipPath id="clip">
          <Rect x="1.5" y="1.5" width="97" height="97" rx="11.5" />
        </ClipPath>
        <AnimatedRect
          animatedProps={animatedStrokeWidth}
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="11.5"
          stroke="#292929"
          clipPath="url(#clip)"
        />
      </Svg>
    </WrapperView>
  );
};

const WrapperView = styled.View({
  marginHorizontal: 4,
  marginVertical: 4,
});
