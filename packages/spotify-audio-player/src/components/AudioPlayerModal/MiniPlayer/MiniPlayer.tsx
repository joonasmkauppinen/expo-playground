import albumCoverSrc from 'apps/expo-playground/assets/spotify-player-album-art.png';
import { useState } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { IconOutputSource } from '../../icons/IconOutputSource';
import { IconPause } from '../../icons/IconPause';
import { IconPlay } from '../../icons/IconPlay';

import {
  AlbumCoverImage,
  ContainerView,
  ControlsContainerView,
  MediaInfoContainer,
  MediaSubTitleText,
  MediaTitleText,
  ProgressBarBackground,
  ProgressBarForeground,
  Spacer,
  WrapperView,
} from './MiniPlayer.styles';

interface MiniPlayerProps {
  style: StyleProp<ViewStyle>;
}

export const MiniPlayer = ({ style }: MiniPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const PlayStateIcon = (() => {
    if (isPlaying) {
      return IconPause;
    }
    return IconPlay;
  })();

  return (
    <ContainerView style={style}>
      <WrapperView>
        <AlbumCoverImage source={albumCoverSrc} />
        <MediaInfoContainer>
          <MediaTitleText>Dark heaven</MediaTitleText>
          <MediaSubTitleText>Brunch Art</MediaSubTitleText>
        </MediaInfoContainer>
        <ControlsContainerView>
          <IconOutputSource />
          <Spacer width={24} />
          <Pressable onPress={() => setIsPlaying(!isPlaying)} hitSlop={10}>
            <PlayStateIcon />
          </Pressable>
        </ControlsContainerView>
      </WrapperView>
      <ProgressBarBackground>
        <ProgressBarForeground />
      </ProgressBarBackground>
    </ContainerView>
  );
};
