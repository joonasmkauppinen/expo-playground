import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

import { color } from '../../../constants/colors';

export const ContainerView = styled(Animated.View)({
  position: 'absolute',
  top: 0,
  left: 8,
  right: 8,
  backgroundColor: color.modalGradientEnd,
  // height: 56,
  borderRadius: 4,
  paddingTop: 8,
  paddingLeft: 8,
  paddingRight: 8,
});

export const WrapperView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  // backgroundColor: 'hotpink',
});

export const AlbumCoverImage = styled.Image({
  width: 40,
  height: 40,
  borderRadius: 4,
});

export const MediaInfoContainer = styled.View({
  flexDirection: 'column',
  flex: 1,
  marginLeft: 10,
  // backgroundColor: 'red',
});

export const MediaTitleText = styled.Text({
  fontFamily: 'Inter_500Medium',
  fontSize: 12,
  color: 'white',
  letterSpacing: 0.2,
  marginBottom: 3,
});

export const MediaSubTitleText = styled(MediaTitleText)({
  color: 'rgba(255, 255, 255, 0.6)',
});

export const ControlsContainerView = styled.View({
  flexDirection: 'row',
  marginRight: 8,
  // backgroundColor: 'hotpink',
});

export const Spacer = styled.View<{ width: number }>(({ width }) => ({
  width,
}));

export const ProgressBarBackground = styled.View({
  height: 2,
  flex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: 2,
  overflow: 'hidden',
  marginTop: 7,
});

export const ProgressBarForeground = styled.View({
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '33%',
});
