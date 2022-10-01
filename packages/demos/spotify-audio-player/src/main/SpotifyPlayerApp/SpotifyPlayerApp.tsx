import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { BottomTabBarWithPlayer } from '../../components/BottomTabBar/BottomTabBar';
import { SimpleScreen } from '../../components/SimpleScreen/SimpleScreen';
import { HomeTabBarIcon } from '../../components/TabBarIcons/HomeTabBarIcon';
import { LibraryTabBarIcon } from '../../components/TabBarIcons/LibraryTabBarIcon';
import { SearchTabBarIcon } from '../../components/TabBarIcons/SearchTabBarIcon';
import { color } from '../../constants/colors';

const Tab = createBottomTabNavigator();

export const SpotifyPlayerApp = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <BottomTabBarWithPlayer {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: color.darkGray,
              borderTopWidth: 0,
              position: 'absolute',
            },
            tabBarLabelStyle: { color: color.white },
          }}
        >
          <Tab.Screen
            name="home"
            component={SimpleScreen}
            options={{ tabBarIcon: HomeTabBarIcon }}
          />
          <Tab.Screen
            name="search"
            component={SimpleScreen}
            options={{ tabBarIcon: SearchTabBarIcon }}
          />
          <Tab.Screen
            name="library"
            component={SimpleScreen}
            options={{ tabBarIcon: LibraryTabBarIcon }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
