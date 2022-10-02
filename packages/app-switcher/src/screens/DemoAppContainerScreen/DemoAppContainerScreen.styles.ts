import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const ContainerView = styled(Animated.View)({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#272727',
  borderRadius: 14,
});

export const DemoAppWrapperView = styled(Animated.View)({
  flex: 1,
});
