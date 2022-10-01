import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconNextMedia = ({ color = DEFAULT_ICON_COLOR }: IconProps) => (
  <Svg width="28" height="29" viewBox="0 0 28 29" fill="none">
    <Path
      d="M24.5 0.5495C25.0523 0.5495 25.5 0.997214 25.5 1.5495V26.5495C25.5 27.1018 25.0523 27.5495 24.5 27.5495H22.019C21.4667 27.5495 21.019 27.1018 21.019 26.5495V15.6477L3.02061 26.6223C2.35423 27.0286 1.5 26.549 1.5 25.7685V2.25708C1.5 1.49276 2.32266 1.01099 2.98925 1.38493L21.019 11.4992V1.5495C21.019 0.997215 21.4667 0.5495 22.019 0.5495H24.5Z"
      fill={color}
    />
  </Svg>
);
