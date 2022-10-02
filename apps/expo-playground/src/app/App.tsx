import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { AppSwitcherScreen } from '@expo-playground/app-switcher';
import { Suspense } from 'react';
import { StatusBar } from 'react-native';

export const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <StatusBar barStyle="light-content" />
      <AppSwitcherScreen />
    </Suspense>
  );
};
