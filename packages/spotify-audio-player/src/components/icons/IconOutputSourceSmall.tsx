import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconOutputSourceSmall = ({
  color = DEFAULT_ICON_COLOR,
}: IconProps) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.2571 7.4505C10.2571 6.62207 10.9287 5.9505 11.7571 5.9505H20.2609C21.0893 5.9505 21.7609 6.62207 21.7609 7.4505V20.4977C21.7609 21.3262 21.0893 21.9977 20.2609 21.9977H11.7571C10.9287 21.9977 10.2571 21.3262 10.2571 20.4977V7.4505ZM11.7571 7.4505V20.4977H20.2609V7.4505H11.7571Z"
      fill={color}
    />
    <Path
      d="M17.3222 10.5818C17.3222 11.307 16.7342 11.8949 16.009 11.8949C15.2838 11.8949 14.6959 11.307 14.6959 10.5818C14.6959 9.85653 15.2838 9.26862 16.009 9.26862C16.7342 9.26862 17.3222 9.85653 17.3222 10.5818Z"
      fill={color}
    />
    <Path
      d="M18.4555 16.556C18.4555 17.9072 17.3602 19.0025 16.009 19.0025C14.6578 19.0025 13.5625 17.9072 13.5625 16.556C13.5625 15.2048 14.6578 14.1095 16.009 14.1095C17.3602 14.1095 18.4555 15.2048 18.4555 16.556Z"
      fill={color}
    />
    <Path d="M5.3241 20.618H7.72992V22.2677H5.3241V20.618Z" fill={color} />
    <Path
      d="M7.72992 5.94659H4.55994C3.73151 5.94659 3.05994 6.61817 3.05994 7.44659V15.9646C3.05994 16.793 3.73151 17.4646 4.55994 17.4646H7.72992V15.9646H4.55994V7.44659H7.72992V5.94659Z"
      fill={color}
    />
  </Svg>
);
