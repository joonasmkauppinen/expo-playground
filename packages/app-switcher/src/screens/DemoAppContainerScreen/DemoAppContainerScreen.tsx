import { clamp } from '@internal/reanimated-helpers';
import { useAtom } from 'jotai';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { selectedAppAtom } from '../../atoms/selectedAppAtom';
import { demoAppsList } from '../../constants/demo-apps-list';

import {
  ContainerView,
  DemoAppWrapperView,
} from './DemoAppContainerScreen.styles';
import { SNAP_LEFT, SNAP_RIGHT } from './animation-utils';
import { usePanGestureHandler } from './usePanGestureHandler';

export const DemoAppContainerScreen = () => {
  const [selectedApp] = useAtom(selectedAppAtom);

  const translateX = useSharedValue(SNAP_RIGHT);
  const gestureHandler = usePanGestureHandler({ translateX });

  const animatedStyles = useAnimatedStyle(() => ({
    borderRadius: clamp(translateX.value, [SNAP_LEFT, SNAP_LEFT + 80], [0, 14]),
    transform: [
      { translateX: clamp(translateX.value, [SNAP_LEFT, SNAP_RIGHT]) },
      {
        scale: clamp(translateX.value, [SNAP_RIGHT - 80, SNAP_RIGHT], [1, 0.9]),
      },
    ],
  }));

  const animatedDemoAppOpacity = useAnimatedStyle(() => ({
    opacity: clamp(translateX.value, [SNAP_LEFT, SNAP_LEFT + 200], [1, 0]),
  }));

  const DemoApp = demoAppsList[selectedApp];

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <ContainerView style={animatedStyles}>
        <DemoAppWrapperView style={animatedDemoAppOpacity}>
          <DemoApp />
        </DemoAppWrapperView>
      </ContainerView>
    </PanGestureHandler>
  );
};
