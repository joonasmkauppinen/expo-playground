import { SpotifyPlayerApp } from '@expo-playground/demos-spotify-audio-player';
import { SVGLineAnimationApp } from '@expo-playground/demos/svg-line-animation';
import { TicTacToeApp } from '@expo-playground/demos/tic-tac-toe';

import { AppSwitcherListItemID } from '../types';

export const demoAppsList: Record<
  AppSwitcherListItemID,
  () => JSX.Element | null
> = {
  'spotify-audio-player': SpotifyPlayerApp,
  'svg-line-animation': SVGLineAnimationApp,
  'tic-tack-toe': TicTacToeApp,
  'apple-bedtime': () => null,
  'apple-progress-rings': () => null,
  'layout-animation': () => null,
  'liquid-swipe': () => null,
  'ray-casting': () => null,
  'shared-element-transition': () => null,
  'three-js': () => null,
  'three-js-flat-list-swipe': () => null,
};
