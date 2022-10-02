import { EASING_OUT_CUBIC } from '@internal/reanimated-helpers';
import { Dimensions } from 'react-native';
import { SharedValue, withTiming } from 'react-native-reanimated';

export const DRAWER_PEEK_AMOUNT = 40;
export const SNAP_LEFT = 0;
export const SNAP_RIGHT = Dimensions.get('screen').width - DRAWER_PEEK_AMOUNT;

export const snapLeft = (translateX: SharedValue<number>) => {
  'worklet';
  translateX.value = withTiming(SNAP_LEFT, {
    duration: 300,
    easing: EASING_OUT_CUBIC,
  });
};

export const snapRight = (translateX: SharedValue<number>) => {
  'worklet';
  translateX.value = withTiming(SNAP_RIGHT, {
    duration: 300,
    easing: EASING_OUT_CUBIC,
  });
};
