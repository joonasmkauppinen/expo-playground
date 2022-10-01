import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

import { color } from '../../constants/colors';

export const SimpleScreen = () => {
  const route = useRoute();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.black,
      }}
    >
      <Text
        style={{ color: color.white, fontSize: 32 }}
      >{`${route.name} screen`}</Text>
    </View>
  );
};
