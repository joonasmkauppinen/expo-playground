import { View, ViewProps } from 'react-native';
import { AnimationCallback } from 'react-native-reanimated';
import Svg from 'react-native-svg';

import { AnimatedPath } from '../PlayerTile/AnimatedPath';

interface SimpleLineProps {
  style: ViewProps;
  onAnimationFinished?: AnimationCallback;
}

export const SimpleLine = ({ style, onAnimationFinished }: SimpleLineProps) => {
  return (
    <View style={style}>
      <Svg width="316" height="100" viewBox="0 0 316 100" fill="none">
        <AnimatedPath
          index={0}
          d="M16 50H300"
          stroke="white"
          strokeWidth={8}
          strokeLinecap="round"
          onAnimationFinished={onAnimationFinished}
        />
      </Svg>
    </View>
  );
};
