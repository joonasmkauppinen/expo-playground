import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconPlayCircleBig = ({
  color = DEFAULT_ICON_COLOR,
}: IconProps) => (
  <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM25.5087 19.8915C24.8421 19.4976 24 19.9781 24 20.7524V43.2476C24 44.0219 24.8421 44.5024 25.5087 44.1085L44.543 32.8609C45.1981 32.4739 45.1981 31.5261 44.543 31.1391L25.5087 19.8915Z"
      fill={color}
    />
  </Svg>
);
