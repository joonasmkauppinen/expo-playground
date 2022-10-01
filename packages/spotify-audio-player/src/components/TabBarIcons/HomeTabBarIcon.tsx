import { color } from '../../constants/colors';
import { IconHomeFilled } from '../icons/IconHomeFilled';
import { IconHomeOutline } from '../icons/IconHomeOutline';

import { TabBarIconProps } from './TabBarIconProps';

export const HomeTabBarIcon = ({ focused }: TabBarIconProps) => {
  if (focused) {
    return <IconHomeFilled color={color.white} />;
  }

  return <IconHomeOutline color={color.white} />;
};
