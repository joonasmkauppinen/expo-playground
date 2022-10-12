import React from 'react';
import { View, ViewStyle } from 'react-native';
import { AnimationCallback } from 'react-native-reanimated';
import Svg from 'react-native-svg';

import { AnimatedPath } from '../PlayerTile/AnimatedPath';

interface DiagonalLineProps {
  style: ViewStyle;
  onAnimationFinished?: AnimationCallback;
}

export const DiagonalLine = ({
  style,
  onAnimationFinished,
}: DiagonalLineProps) => {
  return (
    <View style={style}>
      <Svg width="316" height="316" viewBox="0 0 316 316" fill="none">
        <AnimatedPath
          index={0}
          d="M20 296L296 20"
          stroke="white"
          strokeWidth={8}
          strokeLinecap="round"
          onAnimationFinished={onAnimationFinished}
        />
      </Svg>
    </View>
  );
};
