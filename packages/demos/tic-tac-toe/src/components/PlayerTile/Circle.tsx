import { clamp, EASING_OUT_CUBIC } from '@internal/reanimated-helpers';
import { useAtom } from 'jotai';
import Animated, {
  AnimationCallback,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { playerAnimationRunningAtom } from '../../atoms/atoms';
import { useMountEffect } from '../../hooks/useMountEffect';

const STROKE_WIDTH = 8;
const RADIUS = 30;
const PATH_LENGHT = 2 * Math.PI * RADIUS;
const CX = 50;
const CY = 50;

const AnimatedSvgCircle = Animated.createAnimatedComponent(Circle);

interface AnimatedCircleProps {
  onAnimationFinished?: AnimationCallback;
}

export const AnimatedCircle = ({
  onAnimationFinished,
}: AnimatedCircleProps) => {
  const [, setPlayerAnimationRunning] = useAtom(playerAnimationRunningAtom);

  const progressSV = useSharedValue(0);
  const animatedStroke = useAnimatedProps(() => {
    return {
      strokeWidth: STROKE_WIDTH * progressSV.value,
      strokeDashoffset: PATH_LENGHT - PATH_LENGHT * progressSV.value,
    };
  });

  useMountEffect(() => {
    setPlayerAnimationRunning(true);

    progressSV.value = withTiming(
      1,
      {
        duration: 800,
        easing: EASING_OUT_CUBIC,
      },
      (finished) => {
        'worklet';
        if (onAnimationFinished) {
          onAnimationFinished(finished);
        }
        runOnJS(setPlayerAnimationRunning)(false);
      }
    );
  });

  const animatedRotation = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${clamp(progressSV.value, [0, 1], [110, -90])}deg` },
    ],
  }));

  return (
    <Animated.View style={animatedRotation}>
      <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <AnimatedSvgCircle
          origin={`${CX}, ${CY}`}
          scaleY={-1}
          cx={CX}
          cy={CY}
          r={RADIUS}
          stroke="#FB7B8A"
          strokeLinecap="round"
          strokeDasharray={PATH_LENGHT}
          animatedProps={animatedStroke}
        />
      </Svg>
    </Animated.View>
  );
};
