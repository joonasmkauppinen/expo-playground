import { useAtom } from 'jotai';
import React from 'react';
import { AnimationCallback, runOnJS } from 'react-native-reanimated';
import Svg from 'react-native-svg';

import { playerAnimationRunningAtom } from '../../atoms/atoms';
import { useMountEffect } from '../../hooks/useMountEffect';

import { AnimatedPath } from './AnimatedPath';

const paths = ['M75 25L25 75', 'M25 25L75 75'];

interface AnimatedCrossProps {
  onAnimationFinished?: AnimationCallback;
}

export const AnimatedCross = ({ onAnimationFinished }: AnimatedCrossProps) => {
  const [, setPlayerAnimationRunning] = useAtom(playerAnimationRunningAtom);

  useMountEffect(() => {
    setPlayerAnimationRunning(true);
  });

  return (
    <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      {paths.map((d, index) => (
        <AnimatedPath
          index={index}
          key={`cross-path-${index}`}
          d={d}
          stroke="#FFD88D"
          strokeWidth={8}
          strokeLinecap="round"
          onAnimationFinished={(finished) => {
            'worklet';
            if (onAnimationFinished) {
              onAnimationFinished(finished);
            }
            runOnJS(setPlayerAnimationRunning)(false);
          }}
        />
      ))}
    </Svg>
  );
};
