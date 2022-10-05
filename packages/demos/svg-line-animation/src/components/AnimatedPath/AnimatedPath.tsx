import { useRef, useState } from 'react';
import Animated, {
  Easing,
  interpolate,
  SharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import { Path } from 'react-native-svg';

const colors = ['#F21759', '#B82FE8', '#4C04E7'];

const AnimatedPathComponent = Animated.createAnimatedComponent(Path);

interface AnimatedPathProps {
  d: string;
  progress: SharedValue<number>;
  stroke: string;
  strokeWidth: number;
  index: number;
}

export const AnimatedPath = ({
  d,
  progress,
  stroke,
  strokeWidth,
  index,
}: AnimatedPathProps) => {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  const animatedStrokeDashOffsetForeground = useAnimatedProps(() => {
    return {
      fill: `rgba(255, 255, 255, ${interpolate(
        progress.value,
        [0.85, 1],
        [0, 1]
      )})`,
      strokeWidth:
        strokeWidth * interpolate(progress.value, [0, 0.85, 1], [0, 1, 0]),
      strokeDashoffset:
        pathLength -
        pathLength * Easing.bezierFn(0.35, 0, 0.25, 1)(progress.value),
    };
  });

  const animatedStrokeDashOffsetBackground = useAnimatedProps(() => {
    return {
      strokeWidth:
        strokeWidth * interpolate(progress.value, [0, 0.85, 1], [0, 1, 0]),
      strokeDashoffset:
        pathLength -
        pathLength * Easing.bezierFn(0.4, 1, 0.6, 1)(progress.value),
    };
  });

  return (
    <>
      <AnimatedPathComponent
        // @ts-ignore
        onLayout={() => {
          if (pathRef.current) {
            // @ts-ignore
            setPathLength(pathRef.current.getTotalLength());
          }
        }}
        ref={pathRef}
        d={d}
        stroke={colors[index]}
        strokeDasharray={pathLength}
        strokeLinecap="round"
        animatedProps={animatedStrokeDashOffsetBackground}
      />
      <AnimatedPathComponent
        // @ts-ignore
        onLayout={() => {
          if (pathRef.current) {
            // @ts-ignore
            setPathLength(pathRef.current.getTotalLength());
          }
        }}
        ref={pathRef}
        d={d}
        stroke={stroke}
        strokeDasharray={pathLength}
        strokeLinecap="round"
        animatedProps={animatedStrokeDashOffsetForeground}
      />
    </>
  );
};
