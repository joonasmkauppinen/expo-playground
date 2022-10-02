import { ListItem, ListItemProps } from '../../components/ListItem/ListItem';
import { TitleSection } from '../../components/TitleSection/TitleSection';
import { IconSpotifyAudioPlayer } from '../../components/icons/IconSpotifyAudioPlayer';
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
  },
  // {
  //   id: 'tic-tack-toe',
  //   title: 'Tic Tac Toe',
  // },
  // {
  //   id: 'shared-element-transition',
  //   title: 'Shared element transition',
  // },
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