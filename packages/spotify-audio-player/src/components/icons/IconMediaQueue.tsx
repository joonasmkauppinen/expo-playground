import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconMediaQueue = ({ color = DEFAULT_ICON_COLOR }: IconProps) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.0116 6.95004C4.0116 5.29319 5.35474 3.95004 7.0116 3.95004H17.0116C18.6685 3.95004 20.0116 5.29319 20.0116 6.95004C20.0116 8.6069 18.6685 9.95004 17.0116 9.95004H7.0116C5.35474 9.95004 4.0116 8.6069 4.0116 6.95004ZM7.0116 5.95004H17.0116C17.5639 5.95004 18.0116 6.39776 18.0116 6.95004C18.0116 7.50233 17.5639 7.95004 17.0116 7.95004H7.0116C6.45931 7.95004 6.0116 7.50233 6.0116 6.95004C6.0116 6.39776 6.45931 5.95004 7.0116 5.95004Z"
      fill={color}
    />
    <Path d="M4.0116 12.9505H20.0116V14.9505H4.0116V12.9505Z" fill={color} />
    <Path d="M4.0116 17.9505H20.0116V19.9505H4.0116V17.9505Z" fill={color} />
  </Svg>
);
