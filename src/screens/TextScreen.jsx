import {View, Text, useColorScheme} from 'react-native';
import React from 'react';

const TextScreen = () => {
  const theme = useColorScheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
      }}>
      <View>
        <Text
          style={{
            color: theme === 'dark' ? '#fff' : '#000',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Change Theme
        </Text>
      </View>
    </View>
  );
};

export default TextScreen;
