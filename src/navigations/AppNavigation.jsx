import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartScreen, ChangeTheme, ProductScreen, TextScreen} from '../screens';
import {Provider} from 'react-redux';
import {store, persistor} from '../redux/store'; // Adjust the path to your store
import {PersistGate} from 'redux-persist/integration/react'; // Import PersistGate

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="ChangeTheme" component={ChangeTheme} />
            <Stack.Screen name="TextScreen" component={TextScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default AppNavigation;
