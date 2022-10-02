import { SpotifyPlayerApp } from '@expo-playground/demos-spotify-audio-player';

import { AppSwitcherListItemID } from '../types';

export const demoAppsList: Record<
  AppSwitcherListItemID,
  () => JSX.Element | null
> = {
  'spotify-audio-player': SpotifyPlayerApp,
  'svg-line-animation': () => null,
};
