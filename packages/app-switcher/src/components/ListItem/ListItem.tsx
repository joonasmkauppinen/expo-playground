import { EASING_OUT_CUBIC } from '@internal/reanimated-helpers';
import { useAtom } from 'jotai';
import { Pressable } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { selectedAppAtom } from '../../atoms/selectedAppAtom';
import { AppSwitcherListItemID } from '../../types/AppSwitcherListItemID';
import { IconDefault } from '../icons/IconDefault';

import {
  BottomDivider,
  ContainerView,
  IconAndTitleContainerView,
  IconWrapperView,
  TitleText,
} from './ListItem.styles';

export interface ListItemProps {
  icon?: () => JSX.Element;
  title: string;
  id: AppSwitcherListItemID;
}

export const ListItem = ({
  id,
  icon: Icon = IconDefault,
  title,
}: ListItemProps) => {
  const [selectedAppId, setSelectedAppId] = useAtom(selectedAppAtom);
  const isSelected = selectedAppId === id;

  const animatedBGColor = useAnimatedStyle(() => ({
    backgroundColor: isSelected
      ? withTiming('rgba(31, 31, 31, 1)', {
          duration: 300,
          easing: EASING_OUT_CUBIC,
        })
      : withTiming('rgba(31, 31, 31, 0)', {
          duration: 300,
          easing: EASING_OUT_CUBIC,
        }),
  }));

  return (
    <Pressable onPress={() => setSelectedAppId(id)}>
      <ContainerView style={animatedBGColor}>
        <IconAndTitleContainerView>
          <IconWrapperView>
            <Icon />
          </IconWrapperView>
          <TitleText>{title}</TitleText>
        </IconAndTitleContainerView>
        <BottomDivider isSelected={isSelected} />
      </ContainerView>
    </Pressable>
  );
};
