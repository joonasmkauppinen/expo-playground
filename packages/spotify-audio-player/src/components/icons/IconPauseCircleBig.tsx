import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconPauseCircleBig = ({
  color = DEFAULT_ICON_COLOR,
}: IconProps) => (
  <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM27 20C27.5523 20 28 20.4477 28 21V43C28 43.5523 27.5523 44 27 44H24C23.4477 44 23 43.5523 23 43V21C23 20.4477 23.4477 20 24 20H27ZM40 20C40.5523 20 41 20.4477 41 21V43C41 43.5523 40.5523 44 40 44H37C36.4477 44 36 43.5523 36 43V21C36 20.4477 36.4477 20 37 20H40Z"
      fill={color}
    />
  </Svg>
);
