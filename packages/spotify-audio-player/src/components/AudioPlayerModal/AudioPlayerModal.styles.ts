import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';

import { color } from '../../constants/colors';

const MARGIN_HORIZONTAL = 24;

export const ContainerView = styled(Animated.View)({
  flex: 1,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const StyledLinearGradient = styled(AnimatedLinearGradient)({
  flex: 1,
});

export const ToolBarSectionView = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  marginBottom: 50,
  marginTop: 16,
});

export const ToolBarTitleText = styled.Text({
  color: color.white,
  fontSize: 12,
  fontWeight: 'bold',
});

const IMAGE_SIZE = 342;

export const StyledImage = styled.Image({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  alignSelf: 'center',
  marginBottom: 52,
});

export const MediaInfoSectionView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: MARGIN_HORIZONTAL,
  marginBottom: 22,
});

export const MediaTitleContainerView = styled.View({
  flex: 1,
});

export const MediaTitleText = styled.Text({
  fontFamily: 'Inter_700Bold',
  fontSize: 22,
  letterSpacing: -0.7,
  color: 'white',
});

export const MediaSubTitleText = styled.Text({
  fontFamily: 'Inter_400Regular',
  fontSize: 17,
  letterSpacing: -0.7,
  color: 'rgba(255, 255, 255, 0.6)',
});

export const ProgressSectionView = styled.View({
  marginHorizontal: MARGIN_HORIZONTAL,
  marginBottom: 16,
});

export const ProgressBarContainerView = styled.View({
  height: 12,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 4,
});

export const ProgressBarBackgroundView = styled.View({
  height: 4,
  borderRadius: 2,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  flex: 1,
});

export const ProgressBarForegroundView = styled.View({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '33%',
  backgroundColor: 'white',
  borderRadius: 2,
});

export const SeekHandleView = styled.View({
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: 'white',
  position: 'absolute',
  right: -6,
  top: -4,
});

export const TimestampsContainerView = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const TimestampText = styled.Text({
  fontFamily: 'Inter_500Medium',
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: 11,
  letterSpacing: -0.5,
});

export const MediaControlsSectionView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginHorizontal: MARGIN_HORIZONTAL,
  marginBottom: 30,
});

export const ExtraActionsSectionView = styled.View({
  marginHorizontal: MARGIN_HORIZONTAL,
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const ExtraActionRightGroupView = styled.View({
  flexDirection: 'row',
});
