import styled from '@emotion/native';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import { AnimatedSVG } from './components/AnimatedSVG/AnimatedSVG';

export const SVGLineAnimationApp = () => {
  const progressSV = useSharedValue(0);

  const gesture = Gesture.Tap().onEnd(() => {
    if (progressSV.value < 1) {
      progressSV.value = withTiming(1, {
        duration: 2000,
        easing: Easing.linear,
      });
    } else if (progressSV.value > 0) {
      progressSV.value = withTiming(0, {
        duration: 2000,
        easing: Easing.linear,
      });
    }
  });

  return (
    <GestureDetector gesture={gesture}>
      <ScreenContainerView>
        <InfoTitleText>Tap to Toggle</InfoTitleText>
        <AnimatedSVG progress={progressSV} />
      </ScreenContainerView>
    </GestureDetector>
  );
};

const ScreenContainerView = styled.View({
  flex: 1,
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
});

const InfoTitleText = styled.Text({
  position: 'absolute',
  bottom: 100,
  left: 0,
  right: 0,
  color: '#818181',
  fontSize: 18,
  textAlign: 'center',
});
