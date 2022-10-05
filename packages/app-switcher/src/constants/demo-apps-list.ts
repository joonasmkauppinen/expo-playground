import { SpotifyPlayerApp } from '@expo-playground/demos-spotify-audio-player';
import { SVGLineAnimationApp } from '@expo-playground/demos/svg-line-animation';

import { AppSwitcherListItemID } from '../types';

export const demoAppsList: Record<
  AppSwitcherListItemID,
  () => JSX.Element | null
> = {
  'spotify-audio-player': SpotifyPlayerApp,
  'svg-line-animation': SVGLineAnimationApp,
  'tic-tack-toe': () => null,
};
