import { EASING_OUT_CUBIC } from '@internal/reanimated-helpers';
import { useRef, useState } from 'react';
import Animated, {
  AnimationCallback,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Path, PathProps } from 'react-native-svg';

import { useMountEffect } from '../../hooks/useMountEffect';

const AnimatedSvgPath = Animated.createAnimatedComponent(Path);

interface AnimatedPathProps extends PathProps {
  index: number;
  onAnimationFinished?: AnimationCallback;
  strokeWidth: number;
}

export const AnimatedPath = (props: AnimatedPathProps) => {
  const { strokeWidth, onAnimationFinished, index } = props;
  const pathRef = useRef(null);
  const [pathLenght, setPathLenght] = useState(0);

  const progressSV = useSharedValue(0);
  const animatedStroke = useAnimatedProps(() => {
    return {
      strokeWidth: strokeWidth * progressSV.value,
      strokeDashoffset: pathLenght - pathLenght * progressSV.value,
    };
  });

  useMountEffect(() => {
    const delay = index * 200;
    progressSV.value = withDelay(
      delay,
      withTiming(
        1,
        {
          duration: 800,
          easing: EASING_OUT_CUBIC,
        },
        onAnimationFinished
      )
    );
  });

  return (
    <AnimatedSvgPath
      {...props}
      ref={pathRef}
      // @ts-ignore
      onLayout={() => {
        if (pathRef.current) {
          // @ts-ignore
          setPathLenght(pathRef.current.getTotalLength());
        }
      }}
      strokeDasharray={pathLenght}
      animatedProps={animatedStroke}
    />
  );
};
