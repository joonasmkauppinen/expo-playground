import { color } from '../../constants/colors';
import { IconSearchFilled } from '../icons/IconSearchFilled';
import { IconSearchOutline } from '../icons/IconSearchOutline';

import { TabBarIconProps } from './TabBarIconProps';

export const SearchTabBarIcon = ({ focused }: TabBarIconProps) => {
  if (focused) {
    return <IconSearchFilled color={color.white} />;
  }

  return <IconSearchOutline color={color.white} />;
};
