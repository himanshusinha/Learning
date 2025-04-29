import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import cartReducer from '../reducer/Reducer';
import themeReducer from '../reducer/ThemeReducer';
import languageReducer from '../reducer/LanguageReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage here
};

const rootReducer = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
  language: languageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
