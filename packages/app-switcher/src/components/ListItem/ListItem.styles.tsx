import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const ContainerView = styled(Animated.View)({
  borderRadius: 7,
  maxWidth: 308,
});

export const BottomDivider = styled.View<{ isSelected: boolean }>(
  ({ isSelected }) => ({
    opacity: isSelected ? 0 : 1,
    height: 1,
    backgroundColor: '#212121',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 44,
  })
);

export const IconAndTitleContainerView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
});

export const IconWrapperView = styled.View({
  marginHorizontal: 10,
});

export const TitleText = styled.Text({
  fontSize: 16,
  color: 'white',
});
