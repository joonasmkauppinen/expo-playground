import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import {
  SharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import { snapLeft, snapRight, SNAP_LEFT, SNAP_RIGHT } from './animation-utils';

interface UsePanGestureHandlerProps {
  translateX: SharedValue<number>;
}

type GestureHandlerContext = {
  startX: number;
  gestureAllowed: boolean;
};

export const usePanGestureHandler = ({
  translateX,
}: UsePanGestureHandlerProps) => {
  return useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureHandlerContext
  >({
    onStart(event, context) {
      if (event.x <= 10 || translateX.value === SNAP_RIGHT) {
        context.gestureAllowed = true;
      } else {
        context.gestureAllowed = false;
      }
      context.startX = translateX.value;
    },
    onActive(event, context) {
      if (context.gestureAllowed) {
        translateX.value = context.startX + event.translationX;
      }
    },
    onEnd(_, context) {
      if (!context.gestureAllowed) {
        return;
      }

      if (context.startX === SNAP_LEFT && translateX.value <= SNAP_LEFT + 100) {
        snapLeft(translateX);
        return;
      } else if (
        context.startX === SNAP_LEFT &&
        translateX.value >= SNAP_LEFT + 50
      ) {
        snapRight(translateX);
        return;
      }

      if (
        context.startX === SNAP_RIGHT &&
        translateX.value >= SNAP_RIGHT - 50
      ) {
        snapRight(translateX);
        return;
      } else if (
        context.startX === SNAP_RIGHT &&
        translateX.value <= SNAP_RIGHT - 50
      ) {
        snapLeft(translateX);
        return;
      }
    },
  });
};
