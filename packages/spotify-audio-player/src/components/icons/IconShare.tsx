import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps, DEFAULT_ICON_COLOR } from './IconProps';

export const IconShare = ({ color = DEFAULT_ICON_COLOR }: IconProps) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <Path
      d="M12.0005 1.45596L16.1574 5.95583C16.5321 6.36151 16.5071 6.99418 16.1014 7.36894C15.6957 7.7437 15.063 7.71863 14.6883 7.31295L13 5.48537V12.8737C13 13.426 12.5523 13.8737 12 13.8737C11.4477 13.8737 11 13.426 11 12.8737V5.48291L9.30677 7.31343C8.93175 7.71886 8.29906 7.74352 7.89363 7.36849C7.48819 6.99347 7.46354 6.36079 7.83856 5.95535L12.0005 1.45596Z"
      fill={color}
    />
    <Path
      d="M3.00085 9.95386C3.00085 8.84929 3.89629 7.95386 5.00085 7.95386H7.25V9.95386H5.00085V19.9539H19.0009V9.95386H16.75V7.95386H19.0009C20.1054 7.95386 21.0009 8.84929 21.0009 9.95386V19.9539C21.0009 21.0584 20.1054 21.9539 19.0009 21.9539H5.00085C3.89629 21.9539 3.00085 21.0584 3.00085 19.9539V9.95386Z"
      fill={color}
    />
  </Svg>
);