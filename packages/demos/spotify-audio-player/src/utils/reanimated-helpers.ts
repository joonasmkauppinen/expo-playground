import { Dimensions } from 'react-native';
import { Easing, SharedValue, withTiming } from 'react-native-reanimated';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const SNAP_TOP = 0;
export const SNAP_BOTTOM = SCREEN_HEIGHT - 150;

export const EASING_OUT_CUBIC = Easing.bezier(0.22, 0.61, 0.36, 1);

export const snapToTop = (sharedValue: SharedValue<number>) => {
  'worklet';
  sharedValue.value = withTiming(SNAP_TOP, {
    duration: 300,
    easing: EASING_OUT_CUBIC,
  });
};

export const snapToBottom = (sharedValue: SharedValue<number>) => {
  'worklet';
  sharedValue.value = withTiming(SNAP_BOTTOM, {
    duration: 300,
    easing: EASING_OUT_CUBIC,
  });
};
