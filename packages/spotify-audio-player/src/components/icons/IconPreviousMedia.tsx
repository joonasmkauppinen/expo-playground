import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconPreviousMedia = ({
  color = DEFAULT_ICON_COLOR,
}: IconProps) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <Path
      d="M2.5 0.5C1.94772 0.5 1.5 0.947715 1.5 1.5V26.5C1.5 27.0523 1.94771 27.5 2.5 27.5H4.98098C5.53327 27.5 5.98098 27.0523 5.98098 26.5V15.5982L23.9794 26.5728C24.6458 26.9791 25.5 26.4995 25.5 25.719V2.20758C25.5 1.44326 24.6773 0.961493 24.0107 1.33543L5.98098 11.4497V1.5C5.98098 0.947715 5.53327 0.5 4.98099 0.5H2.5Z"
      fill={color}
    />
  </Svg>
);
