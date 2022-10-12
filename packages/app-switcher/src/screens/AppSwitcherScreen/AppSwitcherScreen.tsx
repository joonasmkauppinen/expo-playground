import { ListItem, ListItemProps } from '../../components/ListItem/ListItem';
import { TitleSection } from '../../components/TitleSection/TitleSection';
import { IconSpotifyAudioPlayer } from '../../components/icons/IconSpotifyAudioPlayer';
import { IconSvgLineAnimationApp } from '../../components/icons/IconSvgLineAnimationApp';
import { IconTicTacToeApp } from '../../components/icons/IconTicTacToeApp';
import { DemoAppContainerScreen } from '../DemoAppContainerScreen/DemoAppContainerScreen';

import {
  ContentContainerView,
  RootContainerView,
  StyledSafeAreaView,
} from './AppSwitcherScreen.styles';

const listItems: ListItemProps[] = [
  {
    id: 'spotify-audio-player',
    title: 'Spotify audio player',
    icon: IconSpotifyAudioPlayer,
  },
  {
    id: 'svg-line-animation',
    title: 'SVG line animation',
    icon: IconSvgLineAnimationApp,
  },
  {
    id: 'tic-tack-toe',
    title: 'Tic Tac Toe',
    icon: IconTicTacToeApp,
  },
  {
    id: 'shared-element-transition',
    title: 'Shared element transition (todo)',
  },
  {
    id: 'layout-animation',
    title: 'Layout animation (todo)',
  },
  { id: 'liquid-swipe', title: 'Liquid swipe (todo)' },
  { id: 'ray-casting', title: 'Ray casting (todo)' },
  { id: 'three-js', title: 'Three.js (todo)' },
  { id: 'three-js-flat-list-swipe', title: 'Three.js FlatList swipe (todo)' },
];

export const AppSwitcherScreen = () => {
  return (
    <RootContainerView>
      <StyledSafeAreaView>
        <ContentContainerView>
          <TitleSection>App Switcher</TitleSection>
          {listItems.map((props, index) => (
            <ListItem {...props} key={`${index}-${props.id}`} />
          ))}
        </ContentContainerView>
      </StyledSafeAreaView>
      <DemoAppContainerScreen />
    </RootContainerView>
  );
};
