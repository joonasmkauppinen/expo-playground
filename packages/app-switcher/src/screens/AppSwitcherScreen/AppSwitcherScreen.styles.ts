import styled from '@emotion/native';
import { SafeAreaView } from 'react-native';

export const RootContainerView = styled.View({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'black',
});

export const StyledSafeAreaView = styled(SafeAreaView)({
  flex: 1,
});

export const ContentContainerView = styled.View({
  flex: 1,
  paddingHorizontal: 10,
});
