import styled from '@emotion/native';
import { clamp } from '@internal/reanimated-helpers';
import {
  BottomTabBar,
  BottomTabBarProps,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  snapToBottom,
  snapToTop,
  SNAP_BOTTOM,
  SNAP_TOP,
} from '../../utils/reanimated-helpers';
import { AudioPlayerModal } from '../AudioPlayerModal/AudioPlayerModal';

type PanGestureHandlerContext = {
  startY: number;
};

export const BottomTabBarWithPlayer = (props: BottomTabBarProps) => {
  const tabBarHeight = 50;
  const insets = useSafeAreaInsets();
  const tabBarOffset = tabBarHeight + insets.bottom;
  const screenHeight = Dimensions.get('screen').height;

  const translateY = useSharedValue(screenHeight - tabBarOffset);

  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    PanGestureHandlerContext
  >({
    onStart(_, context) {
      context.startY = translateY.value;
    },
    onActive(event, context) {
      translateY.value = context.startY + event.translationY;
    },
    onEnd(event) {
      if (event.translationY > 20) {
        snapToBottom(translateY);
      } else if (event.translationY < -20) {
        snapToTop(translateY);
      }
    },
  });

  const animatedTranslateY = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: clamp(
          translateY.value,
          [SNAP_TOP, SNAP_BOTTOM],
          [tabBarOffset, 0]
        ),
      },
    ],
  }));

  return (
    <>
      <AudioPlayerModal
        onGestureEvent={panGestureHandler}
        translateY={translateY}
      />
      <Animated.View style={animatedTranslateY}>
        <BottomTabBar {...props} />
      </Animated.View>
    </>
  );
};
