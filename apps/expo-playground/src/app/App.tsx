import styled from '@emotion/native';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Box = styled(Animated.View)({
  width: 100,
  height: 100,
  backgroundColor: 'hotpink',
});

export const App = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number; startY: number }
  >({
    onStart(_, context) {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive(event, context) {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Box style={animatedStyle} />
        </PanGestureHandler>
      </SafeAreaView>
    </>
  );
};
