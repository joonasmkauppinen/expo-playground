import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { AppSwitcherListItemID } from '../types';

const storage = createJSONStorage<AppSwitcherListItemID>(() => AsyncStorage);
const defaultValue: AppSwitcherListItemID = 'spotify-audio-player';
export const selectedAppAtom = atomWithStorage(
  'selected-app',
  defaultValue,
  storage
);
