import { clamp } from '@internal/reanimated-helpers';
// @ts-ignore
import AlbumCover from 'apps/expo-playground/assets/spotify-player-album-art.png';
import { useState } from 'react';
import { Pressable } from 'react-native';
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { color } from '../../constants/colors';
import { SNAP_BOTTOM, SNAP_TOP } from '../../utils/reanimated-helpers';
import { IconChevronDown } from '../icons/IconChevronDown';
import { IconHeart } from '../icons/IconHeart';
import { IconMediaQueue } from '../icons/IconMediaQueue';
import { IconMore } from '../icons/IconMore';
import { IconNextMedia } from '../icons/IconNextMedia';
import { IconOutputSourceSmall } from '../icons/IconOutputSourceSmall';
import { IconPauseCircleBig } from '../icons/IconPauseCircleBig';
import { IconPlayCircleBig } from '../icons/IconPlayCircleBig';
import { IconPreviousMedia } from '../icons/IconPreviousMedia';
import { IconRepeatAudio } from '../icons/IconRepeatAudio';
import { IconShare } from '../icons/IconShare';
import { IconShuffle } from '../icons/IconShuffle';

import {
  ContainerView,
  MediaInfoSectionView,
  MediaSubTitleText,
  MediaTitleContainerView,
  MediaTitleText,
  ProgressBarBackgroundView,
  ProgressBarForegroundView,
  ProgressBarContainerView,
  SeekHandleView,
  StyledImage,
  StyledLinearGradient,
  TimestampsContainerView,
  TimestampText,
  ToolBarSectionView,
  ToolBarTitleText,
  ProgressSectionView,
  MediaControlsSectionView,
  ExtraActionsSectionView,
  ExtraActionRightGroupView,
} from './AudioPlayerModal.styles';
import { MiniPlayer } from './MiniPlayer/MiniPlayer';
import { Spacer } from './MiniPlayer/MiniPlayer.styles';

interface AudioPlayerModalProps {
  onGestureEvent: (event: GestureEvent<PanGestureHandlerEventPayload>) => void;
  translateY: SharedValue<number>;
}

export const AudioPlayerModal = ({
  onGestureEvent,
  translateY,
}: AudioPlayerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const animatedContainerViewStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: clamp(translateY.value, [SNAP_TOP, SNAP_BOTTOM]) },
    ],
  }));

  const animatedMiniPlayerOpacity = useAnimatedStyle(() => ({
    opacity: clamp(translateY.value, [SNAP_BOTTOM - 50, SNAP_BOTTOM], [0, 1]),
  }));

  const animatedLinearGradientOpacity = useAnimatedStyle(() => ({
    opacity: clamp(translateY.value, [SNAP_BOTTOM - 20, SNAP_BOTTOM], [1, 0]),
  }));

  const PlayStateIcon = isPlaying ? IconPauseCircleBig : IconPlayCircleBig;

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <ContainerView style={animatedContainerViewStyles}>
        <StyledLinearGradient
          style={animatedLinearGradientOpacity}
          colors={[color.modalGradientStart, color.modalGradientEnd]}
        >
          <SafeAreaView>
            <ToolBarSectionView>
              <IconChevronDown />
              <ToolBarTitleText>Playlist</ToolBarTitleText>
              <IconMore />
            </ToolBarSectionView>
            <StyledImage source={AlbumCover} />
            <MediaInfoSectionView>
              <MediaTitleContainerView>
                <MediaTitleText>Dark Heaven</MediaTitleText>
                <MediaSubTitleText>Brunch Art</MediaSubTitleText>
              </MediaTitleContainerView>
              <IconHeart />
            </MediaInfoSectionView>
            <ProgressSectionView>
              <ProgressBarContainerView>
                <ProgressBarBackgroundView>
                  <ProgressBarForegroundView>
                    <SeekHandleView />
                  </ProgressBarForegroundView>
                </ProgressBarBackgroundView>
              </ProgressBarContainerView>
              <TimestampsContainerView>
                <TimestampText>0:58</TimestampText>
                <TimestampText>-1:23</TimestampText>
              </TimestampsContainerView>
            </ProgressSectionView>
            <MediaControlsSectionView>
              <IconShuffle />
              <IconPreviousMedia />
              <Pressable onPress={() => setIsPlaying(!isPlaying)}>
                <PlayStateIcon />
              </Pressable>
              <IconNextMedia />
              <IconRepeatAudio />
            </MediaControlsSectionView>
            <ExtraActionsSectionView>
              <IconOutputSourceSmall />
              <ExtraActionRightGroupView>
                <IconShare />
                <Spacer width={32} />
                <IconMediaQueue />
              </ExtraActionRightGroupView>
            </ExtraActionsSectionView>
          </SafeAreaView>
        </StyledLinearGradient>
        <MiniPlayer style={animatedMiniPlayerOpacity} />
      </ContainerView>
    </PanGestureHandler>
  );
};
