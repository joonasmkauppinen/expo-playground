import { color } from '../../constants/colors';
import { IconLibraryFilled } from '../icons/IconLibraryFilled';
import { IconLibraryOutline } from '../icons/IconLibraryOutline';

import { TabBarIconProps } from './TabBarIconProps';

export const LibraryTabBarIcon = ({ focused }: TabBarIconProps) => {
  if (focused) {
    return <IconLibraryFilled color={color.white} />;
  }

  return <IconLibraryOutline color={color.white} />;
};
