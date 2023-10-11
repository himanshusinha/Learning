import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../redux/action/Actions';

const ChangeTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state);
  const selectedTheme = theme.ThemeReducer;
  console.log(selectedTheme);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selectedTheme == true ? '#000' : '#fff',
      }}>
      <TouchableOpacity
        onPress={() => {
          if (selectedTheme == true) {
            dispatch(changeTheme(false));
          } else {
            dispatch(changeTheme(true));
          }
        }}
        style={{
          backgroundColor: selectedTheme == true ? '#fff' : '#000',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          width: '40%',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: selectedTheme == true ? '#000' : '#fff',
            fontWeight: 'bold',
          }}>
          Change Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeTheme;
