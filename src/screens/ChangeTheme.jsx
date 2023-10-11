import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage, changeTheme} from '../redux/action/Actions';
import {languages} from '../darkTheme/Languages';

const ChangeTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state);
  const selectedTheme = theme.ThemeReducer;
  console.log(selectedTheme);
  const language = useSelector(state => state.LanguageReducer);
  console.log(language);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selectedTheme == true ? '#000' : '#fff',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: selectedTheme == true ? '#000' : '#fff',
          width: '90%',
          alignItems: 'center',
        }}>
        <View style={{width: '90%'}}>
          <View
            style={{
              marginTop: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: selectedTheme == true ? '#fff' : '#000',
              }}>
              {language === 'ENGLISH'
                ? languages[0].english
                : languages[0].hindi}
            </Text>
          </View>
          <View
            style={{
              marginTop: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: selectedTheme == true ? '#fff' : '#000',
              }}>
              Login
            </Text>
          </View>
          <View
            style={{
              marginTop: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderColor: selectedTheme == true ? '#fff' : '#000',
                borderWidth: 1,
                width: '100%',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TextInput
                style={{
                  paddingStart: 20,
                  borderWidth: 1,
                  height: 50,
                }}
                placeholder="Enter Email"
                placeholderTextColor={selectedTheme == true ? '#fff' : '#000'}
              />
            </View>
            <View
              style={{
                borderColor: selectedTheme == true ? '#fff' : '#000',
                borderWidth: 1,
                width: '100%',
                justifyContent: 'center',
                borderRadius: 10,
                marginVertical: 20,
              }}>
              <TextInput
                style={{
                  paddingStart: 20,
                  borderWidth: 1,
                  height: 50,
                }}
                placeholder="Enter Password"
                placeholderTextColor={selectedTheme == true ? '#fff' : '#000'}
              />
            </View>
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: 18,
                fontWeight: 'bold',
                color: selectedTheme == true ? '#fff' : '#000',
              }}>
              Forgot Password?
            </Text>
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: selectedTheme == true ? '#fff' : '#000',
                width: '100%',
                borderRadius: 10,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: selectedTheme == true ? '#000' : '#fff',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                marginTop: 30,
                color: selectedTheme == true ? '#fff' : '#000',
              }}>
              Create new account
            </Text>

            <TouchableOpacity
              onPress={() => {
                if (selectedTheme == true) {
                  dispatch(changeTheme(false));
                } else {
                  dispatch(changeTheme(true));
                }
              }}
              style={{
                height: 50,
                backgroundColor: 'white',
                width: '100%',
                borderRadius: 10,
                marginTop: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text style={{color: 'black', fontSize: 20}}>
                {selectedTheme ? (
                  <Text>Apply Light Theme</Text>
                ) : (
                  <Text>Apply Dark Theme</Text>
                )}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (language === 'ENGLISH') {
                  dispatch(changeLanguage('HINDI'));
                } else {
                  dispatch(changeLanguage('ENGLISH'));
                }
              }}
              style={{
                height: 50,
                backgroundColor: 'white',
                width: '100%',
                borderRadius: 10,
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text style={{color: 'black', fontSize: 20}}>
                Change Language
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangeTheme;
