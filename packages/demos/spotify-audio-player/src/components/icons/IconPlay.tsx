import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconPlay = ({ color = DEFAULT_ICON_COLOR }: IconProps) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path
      d="M6.58846 20.2587V5.64225C6.58846 4.87493 7.41696 4.3935 8.08361 4.77345L20.9067 12.0817C21.5798 12.4653 21.5798 13.4357 20.9067 13.8193L8.08361 21.1276C7.41696 21.5075 6.58846 21.0261 6.58846 20.2587Z"
      fill={color}
    />
  </Svg>
);
